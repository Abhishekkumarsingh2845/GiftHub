import {StyleSheet, Text, View,Image} from 'react-native';
import React, {useEffect} from 'react';



import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import { Images } from '../../assets/images';


type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 3000);
  }, []);
  return (
    <View style={styles.mainView}>
     <Image
   source={Images.logo}></Image>
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  mainView: {
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
 

 