import React from 'react';
import {Switch as BaseSwitch} from 'react-native';
import colors from '../../configs/colors';

interface IProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void | Promise<void>;
  disabled?: boolean;
}

const Switch = (props: IProps) => {
  return (
    <BaseSwitch
      trackColor={{
        false: colors.darkGray,
        true: colors.primary,
      }}
      thumbColor="white"
      {...props}
    />
  );
};

export default Switch;
