import React, {useCallback} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Vibration,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import { colors } from '../utlis/colors';


interface IButton extends TouchableOpacityProps {
  children?: React.ReactNode;
  // add the following types
  color?: ViewStyle['backgroundColor'];
  outlined?: boolean;
  primary?: boolean;
  secondary?: boolean;
  radius?: ViewStyle['borderRadius'];
  flex?: ViewStyle['flex'];
  row?: boolean;
  justify?: ViewStyle['justifyContent'];
  justifyContent?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  alignItems?: ViewStyle['alignItems'];
  shadow?: {
    color?: ViewStyle['shadowColor'];
    offset?: ViewStyle['shadowOffset'];
    opacity?: ViewStyle['shadowOpacity'];
    radius?: ViewStyle['shadowRadius'];
  };
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  position?: ViewStyle['position'];
  top?: ViewStyle['top'];
  right?: ViewStyle['right'];
  bottom?: ViewStyle['bottom'];
  left?: ViewStyle['left'];
  disabled?: boolean;
  vibrate?: number | number[];
  onPress?: (event: any) => void;
}

const CustomButton = ({
  children,
  // add the new props
  color,
  outlined,
  primary,
  secondary,
  radius,
  flex,
  row,
  justify,
  justifyContent,
  align,
  alignItems,
  shadow,
  height,
  width,
  position,
  top,
  right,
  bottom,
  left,
  disabled,
  vibrate,
  style,
  activeOpacity = 0.8,
  onPress,
  ...props
}: IButton) => {
  // create the buttonStyle with the support from the above props
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && {backgroundColor: color},
    primary && {backgroundColor: colors.primary},
    secondary && {backgroundColor: colors.primary},
    outlined && {
      borderWidth: 1,
      borderColor: color,
      backgroundColor: 'transparent',
    },
    radius !== undefined && {borderRadius: radius},
    flex !== undefined && {flex},
    row && {flexDirection: 'row'},
    justify !== undefined && {justifyContent: justify},
    justifyContent !== undefined && {justifyContent},
    align !== undefined && {alignItems: align},
    alignItems !== undefined && {alignItems},
    shadow !== undefined && {...shadow},
    {minHeight: height || 48},
    {minWidth: width || 48},
    position !== undefined && {position},
    top !== undefined && {top},
    right !== undefined && {right},
    bottom !== undefined && {bottom},
    left !== undefined && {left},
    disabled && {opacity: 0.5},
    {alignItems: 'center', justifyContent: 'center'},
    style,
  ]) as ViewStyle;

  /* handle onPress event */
  const handlePress = useCallback(
    (event: any) => {
      onPress?.(event);
      /* vibrate support onPress */
      if (vibrate !== undefined) {
        Vibration.vibrate(vibrate);
      }
    },
    [vibrate, onPress],
  );

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={handlePress}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
