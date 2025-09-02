import {StyleSheet, Text, View,Image} from 'react-native';
import React, {useEffect} from 'react';



import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
import { Images } from '../../assets/images';
import Wrapper from '../../components/Wrapper';


=======

import { Images } from '../../assets/images';
>>>>>>> secondary


type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    setTimeout(() => {
<<<<<<< HEAD
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
      
     

=======
      navigation.navigate('Auth');
    }, 3000);
  }, []);
  return (
    <View style={styles.mainView}>
     <Image
   source={Images.logo}></Image>
    </View>
>>>>>>> secondary
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
 
 

 