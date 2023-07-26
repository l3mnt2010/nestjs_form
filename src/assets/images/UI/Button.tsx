/*
 *
 * @author ThaiND
 * Created at Tue Jun 14 2022
 * @description
 * @param
 * @returns
 * @example
 */
import {Spinner, View} from 'native-base';
import React, {useEffect} from 'react';
import {Keyboard, Text, TouchableOpacity, ViewProps} from 'react-native';
import {ArrowSmallRightIcon} from 'react-native-heroicons/outline';
import tw from '../../utils/tailwind';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'danger'
  | 'text';

interface ButtonProps {
  fullWidth?: boolean;
  onPress?: () => void;
  children?: string | JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  iconRight?: JSX.Element | 'continue';
  iconLeft?: JSX.Element;
  variant?: ButtonVariant;
  hideOnKeyboard?: boolean;
  style?: ViewProps['style'];
}

const Button = ({
  fullWidth = true,
  onPress,
  children,
  disabled = false,
  loading = false,
  iconRight = null,
  iconLeft = null,
  variant = 'primary',
  hideOnKeyboard = false,
  style,
}: ButtonProps) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);
  useEffect(() => {
    if (hideOnKeyboard) {
      const keyboardShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardShow(true);
        },
      );
      const keyboardHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardShow(false);
        },
      );

      return () => {
        keyboardShowListener.remove();
        keyboardHideListener.remove();
      };
    }
  }, [hideOnKeyboard]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        tw`flex-row items-center justify-center p-3 mt-2 border-2 rounded-2xl`,
        disabled || loading
          ? styleSheet.disabled.value
          : styleSheet[variant].value,
        tw`${fullWidth ? 'w-full' : 'w-auto'}
        ${keyboardShow && hideOnKeyboard ? 'hidden' : ''}
        `,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading && (
        <View style={tw`mr-1`}>
          <Spinner color="white" />
        </View>
      )}
      {iconLeft && <View style={tw`mr-2`}>{iconLeft}</View>}
      {typeof children === 'string' ? (
        <Text
          style={[
            tw`text-lg font-bold`,
            disabled || loading
              ? styleSheet.disabled.textStyle
              : styleSheet[variant].textStyle,
          ]}>
          {children}
        </Text>
      ) : (
        children
      )}
      {iconRight && (
        <View style={tw`ml-2`}>
          {iconRight === 'continue' ? (
            <ArrowSmallRightIcon
              style={
                disabled || loading
                  ? styleSheet.disabled.textStyle
                  : styleSheet[variant].textStyle
              }
              strokeWidth={3}
            />
          ) : (
            iconRight
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styleSheet = {
  primary: {
    value: tw`bg-primary border-primary`,
    textStyle: tw`text-light`,
  },
  secondary: {
    value: tw`bg-gray-600 border-gray-600`,
    textStyle: tw`text-gray-200`,
  },
  danger: {
    value: tw`bg-danger border-danger`,
    textStyle: tw`text-light`,
  },
  outlined: {
    value: tw`border-2 border-primary`,
    textStyle: tw`text-primary`,
  },
  text: {
    value: tw`bg-transparent border-transparent`,
    textStyle: tw`text-primary`,
  },
  disabled: {
    value: tw`bg-gray-600 border-gray-600`,
    textStyle: tw`text-light`,
  },
};
