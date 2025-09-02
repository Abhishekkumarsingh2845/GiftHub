import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import { scaleWidth, scaleHeight } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import { colors } from '../utlis/colors';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode; // 👈 allow icons
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  children,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <View style={styles.row}>
        {children && <View style={styles.iconWrapper}>{children}</View>}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
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
  },
  text: {
    color: '#fff',
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
  },
});
