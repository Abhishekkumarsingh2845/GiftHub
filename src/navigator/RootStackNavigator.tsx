import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from '../Screen/Auth/SplashScreen';
import AuthStackNavigator from './AuthStackNavigator';
import Notification from '../Screen/notify/Notification';
import ProfileDetail from '../Screen/profile/ProfileDetail';
import Onboarding from '../Screen/Auth/Onboarding';
import LoginScreen from '../Screen/Auth/LoginScreen';
import Verification from '../Screen/Auth/Verification';
import ContactPermission from '../Screen/Auth/ContactPermission';
import ProfileSetup from '../Screen/Auth/ProfileSetup';
import HomeScreen from '../Screen/Home/HomeScreen';
import SearchScreen from '../Screen/Home/SearchScreen';
import SearchResults from '../Screen/SearchFlow/SearchResults';
import ErrorScreen from '../Screen/SearchFlow/ErrorScreen';
import ProductDetails from '../Screen/Product/ProductDetails';
import ExpenseManagerScreen from '../Screen/AddItem/ExpenseManagerScreen';
import BirthdayGiftsScreen from '../Screen/AddItem/BirthdayGiftsScreen';
import FamilyWishlistScreen from '../Screen/AddItem/FamilyWishlistScreen';



const RootStackNavigator = () => {
  const RootStack = createNativeStackNavigator<any>();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SpashScreen" component={SplashScreen}/>
      <RootStack.Screen name ="Onboarding" component={Onboarding}/>
      <RootStack.Screen name ='LoginScreen' component ={LoginScreen}/>
      <RootStack.Screen name="Verification" component={Verification}/>
      <RootStack.Screen name="ProfileDetail" component={ProfileDetail} />
      <RootStack.Screen name="ProfileSetup" component={ProfileSetup} />
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name ="ContactPermission" component={ContactPermission}/>
     <RootStack.Screen name ="SearchScreen" component={SearchScreen}/>
    <RootStack.Screen name ="SearchResults" component={SearchResults}/>
        <RootStack.Screen name ="ErrorScreen" component={ErrorScreen}/>
         <RootStack.Screen name ="ProductDetails" component={ProductDetails}/>
        <RootStack.Screen name ="ExpenseManagerScreen" component={ExpenseManagerScreen}/>
           <RootStack.Screen name ="BirthdayGiftsScreen" component={BirthdayGiftsScreen}/>
                     <RootStack.Screen name ="FamilyWishlistScreen" component={FamilyWishlistScreen}/>
      

    </RootStack.Navigator>
  );
};

export default RootStackNavigator;

const styles = StyleSheet.create({});
