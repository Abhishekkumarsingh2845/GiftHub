import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scaleWidth } from '../utlis/responsive';

interface WrapperProps {
  children: ReactNode;
  backgroundImage?: ImageSourcePropType;
  disablePadding?: boolean;   // 👈 new prop
}

const Wrapper: React.FC<WrapperProps> = ({ children, backgroundImage, disablePadding }) => {
  return (
    <SafeAreaView style={styles.container}>
      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={styles.gradient}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['#F3F6FBAA', '#FFFFFFAA']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          >
            <ScrollView
              contentContainerStyle={[
                styles.content,
                disablePadding && { padding: 0 },  // ✅ remove padding if requested
              ]}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {children}
            </ScrollView>
          </LinearGradient>
        </ImageBackground>
      ) : (
        <LinearGradient
          colors={['#F3F6FB', '#FFFFFF']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        >
          <ScrollView
            contentContainerStyle={[
              styles.content,
              disablePadding && { padding: 0 },
            ]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        </LinearGradient>
      )}
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
    flexGrow: 1,
    padding: scaleWidth(12),
  },
});
