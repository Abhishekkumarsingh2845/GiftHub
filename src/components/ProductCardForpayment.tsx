// ProductCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>; // SVG as prop
}

const ProductCardForpayment: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  SvgIcon,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <SvgIcon width={28} height={28} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  desc: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  price: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
    marginTop: 4,
  },
});

export default ProductCardForpayment;
