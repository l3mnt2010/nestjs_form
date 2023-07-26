import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import colors from '../../configs/colors';
import tw from '../../utils/tailwind';

export interface ITextFieldProps extends TextInputProps {
  type?: any;
  title?: string;
  value?: string;
  label?: string;
  styleInput?: string;
  maxLength?: number;
  labelPosition?: 'left' | 'top';
  labelStyle?: string;
  onChangeText?: (text: string) => void;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  onIconPress?: () => void;
  padding?: string;
  placeholder?: string;
  err?: string | boolean;
  requirement?: string;
}

const TextField = forwardRef((props: ITextFieldProps, ref) => {
  const {
    type,
    err,
    value,
    styleInput,
    placeholder,
    label,
    icon,
    requirement,
    iconPosition = 'left',
    onIconPress = () => {},
    maxLength = 100,
    onBlur,
  } = props;

  const [hidePassword, setHidePassword] = useState(type === 'password');
  const [focused, setFocused] = useState<boolean>(false);
  const internalInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      setTimeout(() => internalInputRef.current.focus(), 100);
    },
  }));

  return (
    <View style={tw`w-full mt-3 `}>
      {label && (
        <View style={[tw`flex items-start justify-start mb-2 ml-2`]}>
          <Text style={tw`dark:text-light text-dark/80 text-left`}>
            {label}{' '}
          </Text>
        </View>
      )}
      {requirement && (
        <View style={[tw`flex items-start justify-start mb-2 ml-2`]}>
          <Text style={tw`dark:text-light text-dark/80 text-xs text-left`}>
            {requirement}
          </Text>
        </View>
      )}
      <Pressable
        onPress={() => internalInputRef.current.focus()}
        style={tw`relative w-full items-center flex-row rounded-lg border 
        ${styleInput} 
        ${
          err ? 'border-danger' : focused ? 'border-primary' : 'border-darkGray'
        } 
        `}>
        {iconPosition === 'left' && (
          <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
        )}
        {type === 'search' && (
          <View style={tw`flex items-center justify-center ml-1.5`}>
            <MagnifyingGlassIcon style={tw`text-gray-400`} strokeWidth={2} />
          </View>
        )}
        <TextInput
          type={type}
          onBlur={e => {
            setFocused(false);
            onBlur && onBlur(e);
          }}
          style={[
            tw`flex-1 px-3 text-base font-medium text-left dark:text-light text-dark android:py-2 ios:py-3`,
            props.style,
          ]}
          placeholder={focused ? placeholder : ''}
          placeholderTextColor={colors.darkGray}
          secureTextEntry={hidePassword} //for password
          value={value}
          onFocus={() => setFocused(true)}
          maxLength={maxLength}
          autoComplete="off"
          ref={internalInputRef}
          selectionColor={colors.primary}
          selectTextOnFocus={true}
          autoCapitalize={'none'}
          {...props}
        />

        {(type === 'password' || iconPosition === 'right') && (
          <TouchableOpacity
            onPress={() => {
              if (type === 'password') {
                setHidePassword(!hidePassword);
              }
              onIconPress();
            }}
            style={tw`right-0 flex items-center justify-center h-full  max-h-20 rounded-r-xl`}>
            {type === 'password' ? (
              <View style={tw`w-10 h-10 p-1.5`}>
                {hidePassword ? (
                  <EyeSlashIcon
                    height="100%"
                    width="100%"
                    color={colors.darkGray}
                    style={tw``}
                  />
                ) : (
                  <EyeIcon
                    height="100%"
                    color={colors.darkGray}
                    width="100%"
                    style={tw``}
                  />
                )}
              </View>
            ) : (
              <View style={tw`w-full center`}>
                {iconPosition === 'right' && icon}
              </View>
            )}
          </TouchableOpacity>
        )}
      </Pressable>
      {typeof err === 'string' && err && (
        <Text style={tw`text-center text-red-500`}>{err}</Text>
      )}
    </View>
  );
});

export default TextField;
