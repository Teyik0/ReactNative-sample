import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { Home, Welcome } from './src/screens';

type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type WelcomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
