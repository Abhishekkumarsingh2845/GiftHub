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
  children?: React.ReactNode;
  size?: 'default' | 'small'; // 👈 new prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  children,
  size = 'default',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        size === 'small' ? styles.smallButton : styles.defaultButton,
        style,
      ]}
      onPress={onPress}
    >
      <View style={styles.row}>
        {children && <View style={styles.iconWrapper}>{children}</View>}
        <Text
          style={[
            styles.text,
            size === 'small' ? styles.smallText : null,
            textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: scaleWidth(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1D5ABF',
    borderWidth: 1,
  },
  defaultButton: {
    height: scaleHeight(48),
    width: '100%', // 👈 full width
    marginVertical: scaleHeight(12),
  },
  smallButton: {
    height: scaleHeight(35),
    paddingHorizontal: scaleWidth(16), // 👈 content ke hisaab se
    alignSelf: 'flex-start', // 👈 jitna text hoga utna hi width lega
    marginVertical: scaleHeight(6),
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
  smallText: {
    fontSize: scaleWidth(14),
  },
});
