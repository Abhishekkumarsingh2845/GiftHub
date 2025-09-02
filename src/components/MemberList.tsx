import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { scaleHeight, scaleWidth } from "../utlis/responsive";
import AA from '../assets/images/Avtar.svg'
import Lightarrow from "../assets/images/rightarrow.svg";
import DownArrow from '../assets/images/dropdownarrow.svg'

interface ListCardProps {
  image: string;
  title: string;
  itemsCount: number;
  expandable?: boolean; // 👈 whether dropdown should work
  children?: React.ReactNode; // 👈 for nested items
}

const MemberList: React.FC<ListCardProps> = ({
  image,
  title,
  itemsCount,
  expandable = false,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (expandable) {
      setExpanded(!expanded);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.card} onPress={handleToggle} activeOpacity={0.8}>
        {/* Avatar */}
        <AA width={50} height={50} />

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{itemsCount} items</Text>
        </View>

        {/* Right Icon */}
        {/* Right Icon */}
{expandable ? (
  expanded ? (
    <DownArrow width={20} height={20} />
  ) : (
    <Lightarrow width={20} height={20} />
  )
) : (
  <Lightarrow width={20} height={20} />
)}

      </TouchableOpacity>

      {/* Dropdown Content */}
      {expanded && children && <View style={styles.dropdown}>{children}</View>}
    </View>
  );
};

export default MemberList;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: scaleHeight(8),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: scaleWidth(16),
    padding: scaleWidth(12),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: scaleWidth(10),
  },
  title: {
    fontSize: scaleWidth(16),
    fontFamily: "System",
    color: "#111",
  },
  subtitle: {
    fontSize: scaleWidth(14),
    fontFamily: "System",
    color: "#666",
    marginTop: scaleHeight(2),
  },
  dropdown: {
    backgroundColor: "#fff",
    marginTop: 6,
    padding: scaleWidth(12),
    borderRadius: scaleWidth(12),
    borderWidth: 1,
    borderColor: "#eee",
  },
});
