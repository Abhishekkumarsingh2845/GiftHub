import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scaleWidth, scaleHeight } from "../utlis/responsive";
import { Fonts } from "../utlis/Fonts";

interface PaymentOptionCardProps {
  title: string;
  subtitle: string;
  value: string; 
  selectedValue: string; 
  onSelect: (value: string) => void;
}

const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
  title,
  subtitle,
  value,
  selectedValue,
  onSelect,
}) => {
  const isSelected = selectedValue === value;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onSelect(value)}
      style={styles.card}
    >
      {/* Left Radio Circle */}
      <View style={[styles.radioOuter]}>
        {isSelected && <View style={styles.radioInner} />}
      </View>

      {/* Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentOptionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: scaleWidth(12),
    borderWidth: 1,
    borderColor: "#E5E7EB", // hamesha light grey
    padding: scaleWidth(14),
    marginBottom: scaleHeight(12),
  },
  radioOuter: {
    width: scaleWidth(22),
    height: scaleWidth(22),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#9CA3AF", // hamesha grey
    alignItems: "center",
    justifyContent: "center",
    marginRight: scaleWidth(12),
  },
  radioInner: {
    width: scaleWidth(12),
    height: scaleWidth(12),
    borderRadius: 50,
    backgroundColor: "#2563EB", // blue fill if selected
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
  },
  subtitle: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
    color: "#6B7280",
    marginTop: scaleHeight(2),
  },
});
