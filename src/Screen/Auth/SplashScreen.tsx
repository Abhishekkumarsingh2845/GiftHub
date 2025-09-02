import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Images } from '../../assets/images';
import Wrapper from '../../components/Wrapper';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 👇 Yaha decide karna hai kis screen pe jaana hai
      navigation.navigate('Onboarding'); 
      // ya navigation.navigate('Auth');
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);

  return (
    <Wrapper>
      <View style={styles.mainView}>
        <Image source={Images.logo} style={styles.logo} />
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
  logo: {
    resizeMode: 'contain',
    width: 180,
    height: 180,
  },
});
