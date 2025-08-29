import React, { ReactNode } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
        <View style={styles.content}>{children}</View>
      </LinearGradient>
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
    flex: 1,
    padding: 16,
  },
});
