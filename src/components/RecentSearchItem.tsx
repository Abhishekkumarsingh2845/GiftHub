import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface RecentSearchItemProps {
  text: string;
  ClockIcon: React.FC<any>;
  CloseIcon: React.FC<any>;
  onRemove?: () => void;
}

const RecentSearchItem: React.FC<RecentSearchItemProps> = ({
  text,
  ClockIcon,
  CloseIcon,
  onRemove,
}) => (
  <View style={styles.recentItem}>
    <View style={styles.recentLeft}>
      <ClockIcon width={20} height={20} />
      <Text style={styles.recentText}>{text}</Text>
    </View>
    <TouchableOpacity onPress={onRemove}>
      <CloseIcon width={14} height={14} />
    </TouchableOpacity>
  </View>
);

export default RecentSearchItem;

const styles = StyleSheet.create({
  recentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  recentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentText: {
    fontSize: 18,
    marginLeft: 8,
    color: "#374151",
  },
});
