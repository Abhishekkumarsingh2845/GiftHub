import React, { ReactNode } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scaleHeight, scaleWidth } from "../utlis/responsive";
import { Fonts } from "../utlis/Fonts";

interface PurchaserCardProps {
  name: string;
  email: string;
  price?: string | number;
  showPrice?: boolean; 
  avatar: ReactNode; 
  onRemove?: () => void;
  showRemove?: boolean;
}

const Purchaseforpayment: React.FC<PurchaserCardProps> = ({
  name,
  email,
  price,
  showPrice = false,
  avatar,
  onRemove,
  showRemove = false,
}) => {
  return (
    <View style={styles.card}>
      {/* Avatar */}
      <View style={styles.avatar}>{avatar}</View>

      {/* User Info */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      {/* Price (optional) */}
      {showPrice && (
        <View style={styles.priceBox}>
          <Text style={styles.price}>{price}</Text>
        </View>
      )}

      {/* Remove button (optional) */}
      {showRemove && (
        <TouchableOpacity onPress={onRemove} style={styles.crossBtn}>
          <Text style={styles.crossText}>✕</Text>
        </TouchableOpacity>
      )}
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
    shadowColor: "#000",
    shadowOpacity: 0.04, // halka shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 0.5, // Android ke liye minimal
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
    marginTop: scaleHeight(2),
  },
  priceBox: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#EAEAEA",
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: scaleWidth(13),
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
  },
  crossBtn: {
    padding: scaleWidth(4),
    marginLeft: scaleWidth(6),
  },
  crossText: {
    fontSize: scaleWidth(16),
    color: "#6B7280",
  },
});
