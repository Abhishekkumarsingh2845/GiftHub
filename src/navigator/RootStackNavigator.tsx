import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from '../Screen/Auth/SplashScreen';
import AuthStackNavigator from './AuthStackNavigator';
import Notification from '../Screen/notify/Notification';
import ProfileDetail from '../Screen/profile/ProfileDetail';
import EditProfile from '../Screen/profile/EditProfile';
import AISuggestion from '../Screen/suggest/AISuggestion';
import Suggestions from '../Screen/suggest/Suggestions';
import Addtolist from '../Screen/suggest/Addtolist';
import BirthdayWishlist from '../Screen/Birthday/BirthdayWishlist';
import AddItems from '../Screen/Add/AddItems';
import CreateList from '../Screen/list/CreateList';

const RootStackNavigator = () => {
  const RootStack = createNativeStackNavigator<any>();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
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
      <RootStack.Screen name="CreateList" component={CreateList} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;

const styles = StyleSheet.create({});
