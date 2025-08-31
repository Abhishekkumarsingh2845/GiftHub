import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { colors } from '../utlis/colors';
import { Fonts } from '../utlis/Fonts';
import Back from '../assets/images/button.svg';
interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Back width={scaleWidth(40)} height={scaleWidth(40)} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: scaleHeight(12),
    // paddingHorizontal: scaleWidth(10),
  },
  backButton: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaleWidth(18),

    fontFamily: Fonts.ralewayRegular,
    color: colors.black,
    marginRight: scaleWidth(40),
  },
});
