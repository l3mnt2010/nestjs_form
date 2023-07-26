import React from 'react';
import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import tw from '../../utils/tailwind';

export interface MenuItemProps extends TouchableOpacityProps {
  icon?: React.ReactNode;
  title: string | React.ReactNode;
  subtitle?: string;
  value?: string | React.ReactNode;
  showNext?: boolean;
  iconStyle?: ViewProps['style'];
}

const MenuItem = (props: MenuItemProps) => {
  const {
    icon,
    title,
    subtitle,
    value,
    showNext = true,
    style,
    iconStyle,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={[tw`flex-row items-center justify-between min-h-18`, style]}>
      <View
        style={[
          tw`flex items-center justify-center w-10 h-10 bg-gray-200 border border-gray-300 rounded-full dark:border-gray-800 dark:bg-gray-600`,
          iconStyle,
        ]}>
        {icon}
      </View>
      <View style={tw`flex-col items-start justify-center flex-1 ml-2`}>
        {typeof title === 'string' ? (
          <Text style={tw`text-base font-semibold dark:text-light text-dark`}>
            {title}
          </Text>
        ) : (
          <>{title}</>
        )}
        {subtitle && <Text style={tw`text-darkGray `}>{subtitle}</Text>}
      </View>
      <View style={tw`flex-row items-center`}>
        {typeof value === 'string' ? (
          <Text style={tw`mr-2 font-medium text-darkGray `}>{value}</Text>
        ) : (
          <>{value}</>
        )}
        {showNext && (
          <ChevronRightIcon
            style={tw`text-darkGray`}
            size={24}
            strokeWidth={2}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
