import React from 'react';
import {Text, TextProps, TouchableOpacity, View, ViewProps} from 'react-native';
import tw from '../../utils/tailwind';
import CheckBoxBase from '@react-native-community/checkbox';
import colors from '../../configs/colors';
import {useAppColorScheme} from 'twrnc';
import triggerHapticFeedback from '../../utils/haptic';

interface ICheckBoxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  title?: string;
  style?: ViewProps['style'];
}

const CheckBox = (props: ICheckBoxProps) => {
  const {value, onValueChange, title, style} = props;

  return (
    <View style={[tw`flex-row items-center w-full px-2`, style]}>
      <CheckBoxBase
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 20, height: 20}}
        lineWidth={2}
        tintColors={{
          true: colors.primary,
          false: colors.light,
        }}
        onCheckColor={colors.primary}
        onTintColor={colors.primary}
        animationDuration={0.5}
        boxType="square"
        onValueChange={onValueChange}
        value={value}
        onAnimationDidStop={triggerHapticFeedback}
      />
      <TouchableOpacity
        style={tw`flex-1`}
        onPress={() => onValueChange(!value)}>
        <Text
          style={tw`flex-row flex-shrink ml-3 text-sm font-medium dark:text-light text-dark`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;
