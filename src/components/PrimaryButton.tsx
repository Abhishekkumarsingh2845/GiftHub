import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
<<<<<<< HEAD
  View,
=======
>>>>>>> secondary
} from 'react-native';
import { scaleWidth, scaleHeight } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import { colors } from '../utlis/colors';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
<<<<<<< HEAD
  children?: React.ReactNode; // 👈 allow icons
=======
>>>>>>> secondary
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
<<<<<<< HEAD
  children,
=======
>>>>>>> secondary
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      onPress={onPress}
    >
<<<<<<< HEAD
      <View style={styles.row}>
        {children && <View style={styles.iconWrapper}>{children}</View>}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
=======
      <Text style={[styles.text, textStyle]}>{title}</Text>
>>>>>>> secondary
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
<<<<<<< HEAD
    backgroundColor: colors.primary,
    height: scaleHeight(40),
    borderRadius: scaleWidth(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleHeight(12),
    width:'100%',
    borderColor:'#1D5ABF',borderWidth:1
  
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: scaleWidth(8),
=======
    backgroundColor: colors.primary, // #3B82F6
    height: scaleHeight(50),
    borderRadius: scaleWidth(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleHeight(12),
    width: '100%',
>>>>>>> secondary
  },
  text: {
    color: '#fff',
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
  },
});
