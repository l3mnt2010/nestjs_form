import React from 'react';
import {Text, TouchableOpacity, View, ViewProps} from 'react-native';
import {ClipboardDocumentListIcon} from 'react-native-heroicons/outline';
import colors from '../../configs/colors';
import {copyToClipboard} from '../../utils/clipboard';
import tw from '../../utils/tailwind';

const CopyButton = ({
  text,
  hideIcon = false,
  children = null,
  size = 16,
  color = colors.primary,
  style,
}: {
  text: string | number;
  children?: string | null | JSX.Element;
  hideIcon?: boolean;
  size?: number;
  color?: string;
  style?: ViewProps['style'];
}) => {
  return (
    <TouchableOpacity
      onPress={() => copyToClipboard(text)}
      style={[tw`flex-row items-center justify-center`, style]}>
      {children && (
        <View style={tw`mr-2`}>
          {typeof children === 'string' ? (
            <Text style={tw`text-sm font-bold dark:text-light text-dark`}>
              {children}
            </Text>
          ) : (
            children
          )}
        </View>
      )}
      {!hideIcon && (
        <TouchableOpacity onPress={() => copyToClipboard(text)}>
          <ClipboardDocumentListIcon
            size={size}
            strokeWidth={2}
            color={color}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default CopyButton;
