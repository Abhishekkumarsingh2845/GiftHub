// src/components/SocialButton.tsx
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import { colors } from "../utlis/colors";
import { Fonts } from "../utlis/Fonts";

type Props = {
  icon: string | React.ReactNode;
  text: string;
  onPress?: () => void;
};

const SocialButton: React.FC<Props> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.content}>
        {/* Icon */}
        <View style={styles.icon}>
          {typeof icon === "string" ? (
            <Image source={{ uri: icon }} style={styles.img} />
          ) : (
            icon
          )}
        </View>

        {/* Text */}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // 👈 text + icon center ho jayenge
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 15,
    color: colors.text,
    fontFamily: Fonts.ralewaySemiBold,
  },
});
