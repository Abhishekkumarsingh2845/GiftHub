import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from '../Screen/Auth/SplashScreen';
import AuthStackNavigator from './AuthStackNavigator';
import Notification from '../Screen/notify/Notification';
import ProfileDetail from '../Screen/profile/ProfileDetail';

const RootStackNavigator = () => {
  const RootStack = createNativeStackNavigator<any>();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <RootStack.Screen name="Splash" component={SplashScreen} />
    <RootStack.Screen name="Auth" component={AuthStackNavigator} /> */}
      {/* <RootStack.Screen name="Notification" component={Notification} /> */}
      <RootStack.Screen name="ProfileDetail" component={ProfileDetail} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;

const styles = StyleSheet.create({});
