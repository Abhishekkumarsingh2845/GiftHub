import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from "../utlis/Fonts";

interface ListCardProps {
  icon?: React.ReactNode;       // left side icon
  title: string;                // main title
  items?: number;               // optional items count
  shared?: boolean;             // shared/private
  subText?: string;             // direct custom subText
  rightIcon?: React.ReactNode;  // right side icon
  rightText?: string;           // right side text (e.g. "Add")
  onPress?: () => void;
}

const ListCard: React.FC<ListCardProps> = ({
  icon,
  title,
  items,
  shared,
  subText,
  rightIcon,
  rightText,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Left section */}
      <View style={styles.left}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <View>
          <Text style={styles.title}>{title}</Text>
          {subText || items !== undefined ? (
            <Text style={styles.sub}>
              {subText || `${items} items • ${shared ? "Shared" : "Private"}`}
            </Text>
          ) : null}
        </View>
      </View>

      {/* Right section */}
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: Fonts.ralewaySemiBold,
  },
  sub: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  rightText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
    fontFamily: Fonts.ralewaySemiBold,
  },
  iconWrapper: {
    marginLeft: 10,
  },
});
