import React, { ReactNode } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scaleHeight, scaleWidth } from "../utlis/responsive";
import { Fonts } from "../utlis/Fonts";

interface PurchaserCardProps {
  name: string;
  email: string;
  price?: string | number;
  showPrice?: boolean; // agar true hoga to hi show hoga
  avatar: ReactNode; // ✅ SVG ya koi bhi custom component
  onRemove: () => void;
}

const Purchaseforpayment: React.FC<PurchaserCardProps> = ({
  name,
  email,
  price,
  showPrice = false,
  avatar,
  onRemove,
}) => {
  return (
    <View style={styles.card}>
      {/* Avatar (SVG ya Image as Component) */}
      <View style={styles.avatar}>{avatar}</View>

      {/* User Info */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      {/* Price (conditionally) */}
      {showPrice && <Text style={styles.price}>${price}</Text>}

      {/* Cross Button */}
      <TouchableOpacity onPress={onRemove} style={styles.crossBtn}>
        <Text style={styles.crossText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Purchaseforpayment;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: scaleWidth(12),
    padding: scaleWidth(10),
    marginBottom: scaleHeight(10),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    overflow: "hidden",
    marginRight: scaleWidth(10),
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
  },
  email: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
    color: "#6B7280",
  },
  price: {
    fontSize: scaleWidth(13),
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
    marginRight: scaleWidth(10),
  },
  crossBtn: {
    padding: scaleWidth(4),
  },
  crossText: {
    fontSize: scaleWidth(16),
    color: "#6B7280",
  },
});
