import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeProps } from '../../App';
import tw from 'twrnc';
import React, { useState } from 'react';
import { SvgTest } from '../components';

const Home = ({ navigation }: HomeProps) => {
  const [circleColor, setCircleColor] = useState('#fff');

  const handleButtonClick = () => {
    const newColor = circleColor === '#fff' ? '#000' : '#fff';
    setCircleColor(newColor);
  };

  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <Text style={tw`text-xl font-semibold text-center mt-8`}>
        Ou se situe votre douleur ?
      </Text>
      <Button title='Go to Details' onPress={handleButtonClick} />
      <SvgTest />
    </SafeAreaView>
  );
};

export default Home;
