import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { scaleWidth, scaleHeight } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import { colors } from '../utlis/colors';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary, // #3B82F6
    height: scaleHeight(50),
    borderRadius: scaleWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleHeight(12),
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
  },
});
