import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup} from '../screens/Auth';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();
const AuthStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
