import {debounce} from 'lodash';
import React, {ComponentType} from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface IScaleAnimationProps extends TouchableOpacityProps {
  /**
   * Value of the scale animation
   */
  scaleValue?: number;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
  delay?: number;
  underlayColor?: string;
  children?: JSX.Element[] | JSX.Element;
  style?: StyleProp<ViewStyle>;
  /**
   *component to render inside the scale animation default is Pressable
   */
  component?: ComponentType<any>;
}
/**
 * @author ThaiND
 * Created Date Mon Jun 13 2022
 * @description Scale down on press in. Allows to use component's props
 * @param {scaleValue, onPress, children, style} : IScaleAnimationProps
 * @returns {JSX.Element}
 * @example
 * <ScaleAnimatedView
      component={TouchableOpacity}
      style={tw``}
      onPress={onPress}>
 */

const PressableAnimated = ({
  scaleValue = 0.95,
  onPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
  onLongPress = () => {},
  component = Pressable,
  children,
  style,
  underlayColor,
  ...props
}: IScaleAnimationProps): JSX.Element => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, scaleValue];
  const scale = animation.interpolate({inputRange, outputRange});
  const AnimatedPressable = Animated.createAnimatedComponent(component);

  const onPressInHandler = () => {
    onPressIn();
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOutHandler = async () => {
    onPressOut();
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  const onLongPressHandler = async () => {
    onLongPress();
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const onPressHandler = async () => {
    onPress();
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const debouncedOnPressHandler = debounce(onPressHandler, 300);

  return (
    <AnimatedPressable
      underlayColor={underlayColor}
      style={[style, {transform: [{scale}]}]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      onLongPress={onLongPressHandler}
      onPress={debouncedOnPressHandler}
      {...props}>
      <>{children}</>
    </AnimatedPressable>
  );
};

export default PressableAnimated;
