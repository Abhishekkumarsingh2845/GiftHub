import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface PartnerCardProps {
  Icon: React.FC<any>;
  name: string;
  onPress?: () => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ Icon, name, onPress }) => (
  <TouchableOpacity style={styles.partnerCard} onPress={onPress}>
    <Icon width={70} height={28} />
    <Text style={styles.partnerText}>{name}</Text>
  </TouchableOpacity>
);

export default PartnerCard;

const styles = StyleSheet.create({
  partnerCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    width: "30%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  partnerText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});
