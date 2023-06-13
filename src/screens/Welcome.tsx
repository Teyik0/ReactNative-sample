import { View, Text, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import { WelcomeProps } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }: WelcomeProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      navigation.navigate('Home');
      setIsPressed(false);
    }, 10);
    return true;
  };
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(withTiming(20), withTiming(0)),
          -1,
          true
        ),
      },
    ],
  }));

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name='shield-outline'
          size={Dimensions.get('window').width}
          style={{ position: 'relative', display: 'flex' }}
          color='#6EC36C'
        />
      </View>
      <View
        style={{
          width: Dimensions.get('window').width * 0.9,
          backgroundColor: '#4A88D0',
          position: 'absolute',
          borderRadius: Dimensions.get('window').width * 0.03,
          padding: Dimensions.get('window').width * 0.05,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: Dimensions.get('window').width * 0.04,
            fontWeight: 'bold',
          }}
        >
          Bienvenue sur le questionnaire de santé HygieCloud
        </Text>
        <Text
          style={{
            color: '#6EC36C',
            textAlign: 'center',
            fontSize: Dimensions.get('window').width * 0.038,
            marginTop: 10,
          }}
        >
          Borne conseil santé par symptômes observés
        </Text>
      </View>
      <Animated.View
        style={[
          {
            backgroundColor: isPressed ? '#5C8E5B' : '#6EC36C',
            padding: Dimensions.get('window').width * 0.02,
            width: Dimensions.get('window').width * 0.4,
            borderRadius: 400,
            elevation: 3,
          },
          animatedStyle,
        ]}
        onStartShouldSetResponder={() => handleClick()}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: Dimensions.get('window').width * 0.04,
            fontWeight: 'bold',
          }}
        >
          Démarrer
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Welcome;
