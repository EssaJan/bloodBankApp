import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/loginScreen'
import SignupScreen from '../Screens/signupScreen'
import SplashScreen from '../Screens/splashScreen'
import Dashboard from '../Screens/dashBoard'
import Donner from "../Screens/findDonner";
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" options={{headerShown:false}} component={SplashScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown:false}}  component={SignupScreen} />
        <Stack.Screen name="DashBoard" options={{headerShown:false}} component={Dashboard} />
        <Stack.Screen name="DonnerScreen" options={{headerShown:false}} component={Donner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;