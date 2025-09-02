import React, { ReactNode } from 'react';
<<<<<<< HEAD
import { StyleSheet, View, SafeAreaView, ImageBackground, ImageSourcePropType } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface WrapperProps {
  children: ReactNode;
  backgroundImage?: ImageSourcePropType; // optional image
}

const Wrapper: React.FC<WrapperProps> = ({ children, backgroundImage }) => {
  return (
    <SafeAreaView style={styles.container}>
      {backgroundImage ? (
        <ImageBackground source={backgroundImage} style={styles.gradient} resizeMode="cover">
          <LinearGradient
            colors={['#F3F6FBAA', '#FFFFFFAA']} // add transparency if needed
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.content}>{children}</View>
          </LinearGradient>
        </ImageBackground>
      ) : (
        <LinearGradient
          colors={['#F3F6FB', '#FFFFFF']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.content}>{children}</View>
        </LinearGradient>
      )}
=======
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scaleWidth } from '../utlis/responsive';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F3F6FB', '#FFFFFF']} // very light bluish → white
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      >
        <ScrollView 
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled" // makes inputs usable inside
        >
          {children}
        </ScrollView>
      </LinearGradient>
>>>>>>> secondary
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
  },
  content: {
<<<<<<< HEAD
    flex: 1,
    padding: 16,
=======
    flexGrow: 1,
    padding: scaleWidth(12),
>>>>>>> secondary
  },
});
