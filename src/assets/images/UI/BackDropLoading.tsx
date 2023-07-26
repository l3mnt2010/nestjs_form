import {Modal, Spinner} from 'native-base';
import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../utils/tailwind';

interface BackDropLoadingProps {
  isLoading: boolean;
  label?: string;
}
export default function BackDropLoading(props: BackDropLoadingProps) {
  const {isLoading, label = 'Loading'} = props;
  return (
    <Modal isOpen={isLoading}>
      <View style={tw`p-3 rounded-lg bg-stone-800`}>
        <Spinner color={'white'} size={60} />
        <Text
          style={tw`text-xl font-bold text-center dark:text-light text-dark`}>
          {label}
        </Text>
      </View>
    </Modal>
  );
}
