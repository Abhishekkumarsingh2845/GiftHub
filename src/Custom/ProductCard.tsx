import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { scaleHeight } from "../utlis/responsive";

interface ProductCardProps {
  image: string | React.ReactNode;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: number;
  partnerName: string;
  partnerIcon: React.ReactNode;
  onAdd?: () => void;
  onViewPartner?: () => void;
  
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  partnerName,
  partnerIcon,
  onAdd,
  onViewPartner,
}) => {
  return (
    <View style={styles.card}>
      {/* Discount Badge */}
      {discount && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{discount}% Off</Text>
        </View>
      )}

      {/* Product Image */}
      {typeof image === "string" ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.imageWrapper}>{image}</View>
      )}

      {/* Title */}
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      {/* Partner */}
      <View style={styles.partnerRow}>
        {partnerIcon}
        <Text style={styles.partnerText}>{partnerName}</Text>
      </View>

      {/* Price */}
      <View style={styles.priceRow}>
        <Text style={styles.price}>${price}</Text>
        {oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
      </View>

      {/* Buttons */}
      <PrimaryButton title="Add to Cart"
      style={{height:scaleHeight(35)}}
      onPress={onAdd}/>

      <TouchableOpacity onPress={onViewPartner}>
        <Text style={styles.viewText}>View on {partnerName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    width: "48%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 14,
  },
  badge: {
    backgroundColor: "#22C55E",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },
  imageWrapper: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  partnerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  partnerText: {
    fontSize: 12,
    color: "#374151",
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0066FF",
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 13,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
  button: {
    backgroundColor: "#0066FF",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    marginBottom: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
  viewText: {
    fontSize: 16,
    color: "#0066FF",
    textAlign: "center",
    fontWeight: "500",
  },
});
