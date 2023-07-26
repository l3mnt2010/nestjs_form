import React from 'react';
import {View} from 'react-native';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from 'react-native-heroicons/solid';
import Toast, {
  BaseToast,
  BaseToastProps,
  ToastShowParams,
} from 'react-native-toast-message';

import tw from '../../utils/tailwind';

const DURATION = 2000;
const defaultConfig: ToastShowParams = {
  visibilityTime: DURATION,
  autoHide: true,
  position: 'top',
  topOffset: 60,
};

const toast = {
  info: (message = '', config: ToastShowParams = {}) => {
    Toast.show({
      ...defaultConfig,
      ...config,
      type: 'info',
      text1: message,
    });
  },
  success: (message = '', config: ToastShowParams = {}) => {
    Toast.show({
      ...defaultConfig,
      text1: message,
      type: 'success',
      ...config,
    });
  },
  error: (message = '', config: ToastShowParams = {}) => {
    Toast.show({
      ...defaultConfig,
      text1: message,
      type: 'error',
      ...config,
    });
  },
  warning: (message = '', config: ToastShowParams = {}) => {
    Toast.show({
      ...defaultConfig,
      text1: message,
      type: 'warning',
      ...config,
    });
  },
};

export default toast;

const baseStyle = tw`border-l-0 rounded-lg bg-darkGray/85`;

export const toastConfig = {
  info: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text1Style={tw`text-light `}
      text2Style={tw`text-xs text-light `}
      renderLeadingIcon={() => ToastIcon.info}
      style={[baseStyle]}
    />
  ),
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text1Style={tw`text-light `}
      text2Style={tw`text-xs text-light `}
      renderLeadingIcon={() => ToastIcon.success}
      style={[baseStyle]}
    />
  ),
  error: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text1Style={tw`text-light `}
      text2Style={tw`text-xs text-light `}
      renderLeadingIcon={() => ToastIcon.error}
      style={[baseStyle]}
    />
  ),
  warning: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text1Style={tw`text-light `}
      text2Style={tw`text-xs text-light `}
      renderLeadingIcon={() => ToastIcon.warning}
      style={[baseStyle]}
    />
  ),
};

const iconSize = 32;

const ToastIcon = {
  info: (
    <View style={tw`ml-1 center`}>
      <InformationCircleIcon style={tw`text-blue-400`} size={iconSize} />
    </View>
  ),
  success: (
    <View style={tw`ml-1 center`}>
      <CheckCircleIcon style={tw`text-green-400`} size={iconSize} />
    </View>
  ),
  error: (
    <View style={tw`ml-1 center`}>
      <ExclamationCircleIcon style={tw`text-red-400`} size={iconSize} />
    </View>
  ),
  warning: (
    <View style={tw`ml-1 center`}>
      <ExclamationCircleIcon style={tw`text-yellow-400`} size={iconSize} />
    </View>
  ),
};
