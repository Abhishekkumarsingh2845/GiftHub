import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from "../Screen/Auth/SplashScreen";
import AuthStackNavigator from "./AuthStackNavigator";


const RootStackNavigator = () => {
    const RootStack = createNativeStackNavigator<any>();
  return (
   <RootStack.Navigator 
   screenOptions={{headerShown:false}}
   
>
    <RootStack.Screen name="Splash" component={SplashScreen} />
    <RootStack.Screen name="Auth" component={AuthStackNavigator} />
   </RootStack.Navigator>
   
  )
}

export default RootStackNavigator

const styles = StyleSheet.create({})