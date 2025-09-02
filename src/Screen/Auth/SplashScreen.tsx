import {StyleSheet, Text, View,Image} from 'react-native';
import React, {useEffect} from 'react';



import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import { Images } from '../../assets/images';
import Wrapper from '../../components/Wrapper';




type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000);
  }, []);
  return (
   <Wrapper>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Image source={Images.logo}
      style={{justifyContent:'center'}}/>
      </View>
   </Wrapper>
      
     

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
 
 

 