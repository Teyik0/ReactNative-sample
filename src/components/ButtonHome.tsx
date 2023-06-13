import { View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';

interface ButtonHomeProps {
  navigation: any;
  navPath: string;
}

const ButtonHome = ({ navigation, navPath }: ButtonHomeProps) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View
      style={tw`flex flex-1 justify-center items-center absolute bottom-0 left-0 right-0`}
    >
      <View
        style={[
          tw`flex justify-center items-center ${
            !isPressed ? 'bg-[#6892FF]' : 'bg-[#004698]'
          } rounded-full mb-8`,
          {
            width: Dimensions.get('window').width * 0.12,
            height: Dimensions.get('window').width * 0.12,
          },
        ]}
        onStartShouldSetResponder={() => {
          setIsPressed(true);
          setTimeout(() => {
            setIsPressed(false);
            navigation.navigate(navPath);
          }, 150);
          return true;
        }}
      >
        <Ionicons
          name='home'
          size={Dimensions.get('window').width * 0.06}
          color='white'
        />
      </View>
    </View>
  );
};

export default ButtonHome;
