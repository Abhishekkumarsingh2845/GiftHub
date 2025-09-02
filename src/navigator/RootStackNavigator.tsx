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


import EditProfile from '../Screen/profile/EditProfile';
import AISuggestion from '../Screen/suggest/AISuggestion';
import Suggestions from '../Screen/suggest/Suggestions';
import Addtolist from '../Screen/suggest/Addtolist';
import BirthdayWishlist from '../Screen/Birthday/BirthdayWishlist';
import AddItems from '../Screen/Add/AddItems';
import CreateList from '../Screen/list/CreateList';
import EditList from '../Screen/list/EditList';
import AddPeople from '../Screen/list/AddPeople';
import UpdatePurchase from '../Screen/purchase/UpdatePurchase';
import FullPurchase from '../Screen/purchase/FullPurchase';
import NewList from '../Screen/groups/NewList';
import EditNewList from '../Screen/groups/EditNewList';
import FamilyWishlist from '../Screen/groupFamily/FamilyWishlist';
import GroupWishlist from '../Screen/groupFamily/GroupWishlist';

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
      

      {/* <RootStack.Screen name="Splash" component={SplashScreen} />
       <RootStack.Screen name="Auth" component={AuthStackNavigator} /> */}
      {/* <RootStack.Screen name="Notification" component={Notification} /> */}
      {/* <RootStack.Screen name="ProfileDetail" component={ProfileDetail} /> */}
      {/* <RootStack.Screen name="EditProfile" component={EditProfile} /> */}
      {/* <RootStack.Screen name="AISuggestion" component={AISuggestion} />  */}
      {/* <RootStack.Screen name="Suggestions" component={Suggestions} />  */}
      {/* <RootStack.Screen name="Addtolist" component={Addtolist} />  */}
      {/* <RootStack.Screen name="BirthdayWishlist" component={BirthdayWishlist} /> */}
      {/* <RootStack.Screen name="AddItems" component={AddItems} /> */}
      {/* <RootStack.Screen name="CreateList" component={CreateList} /> */}
      {/* <RootStack.Screen name="EditList" component={EditList} /> */}
      {/* <RootStack.Screen name="AddPeople" component={AddPeople} /> */}
            {/* <RootStack.Screen name="UpdatePurchase" component={UpdatePurchase} /> */}
                        {/* <RootStack.Screen name="FullPurchase" component={FullPurchase} /> */}
                           {/* <RootStack.Screen name="NewList" component={NewList} /> */}
                           {/* <RootStack.Screen name="EditNewList" component={EditNewList} /> */}
                                                      {/* <RootStack.Screen name="FamilyWishlist" component={FamilyWishlist} /> */}
                                                        <RootStack.Screen name="GroupWishlist" component={GroupWishlist} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;

const styles = StyleSheet.create({});
