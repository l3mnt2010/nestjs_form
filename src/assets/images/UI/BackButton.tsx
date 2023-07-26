import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import tw from '../../utils/tailwind';

const BackButton = ({onPress = null}: {onPress?: () => any}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress ? onPress() : navigation.goBack();
      }}
      style={tw`p-1.5 rounded-lg w-9 h-9 dark:bg-menu bg-menuLight`}>
      <ArrowLeftIcon
        style={tw`text-primary`}
        strokeWidth={2.5}
        height={'100%'}
        width={'100%'}
      />
    </TouchableOpacity>
  );
};
export default BackButton;
