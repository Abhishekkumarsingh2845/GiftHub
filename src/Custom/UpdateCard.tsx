import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

interface UpdateCardProps {
  image?: string;            // URL wali image
  svgIcon?: React.ReactNode; // SVG component
  text: string;
  time: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ image, svgIcon, text, time }) => {
  return (
    <View style={styles.card}>
      {/* Left: Image or SVG */}
      {svgIcon ? (
        <View style={styles.iconWrapper}>{svgIcon}</View>
      ) : (
        image && <Image source={{ uri: image }} style={styles.image} />
      )}

      {/* Right: Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={2}>
          {text}
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default UpdateCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#F1F5F9",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  iconWrapper: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 12,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#6B7280",
  },
});
