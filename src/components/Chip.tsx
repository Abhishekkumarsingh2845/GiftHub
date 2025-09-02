import React from "react";
import { TouchableOpacity, Text, StyleSheet,ViewStyle,TextStyle } from "react-native";
import { Fonts } from "../utlis/Fonts";

interface ChipProps {
  label: string;
  onPress?: () => void;
   style?: ViewStyle;
   textStyle?: TextStyle;
}

const Chip: React.FC<ChipProps> = ({ label, onPress ,style,textStyle}) => (
  <TouchableOpacity style={[styles.chip, style]}onPress={onPress}>
    <Text style={[styles.chipText, textStyle]}>{label}</Text>
  </TouchableOpacity>
);

export default Chip;

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 19,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 10,
    marginBottom: 10,
  },
  chipText: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "500",
    fontFamily:Fonts.ralewayMedium
  },
});
