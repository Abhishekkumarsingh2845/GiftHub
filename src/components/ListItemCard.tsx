import React, { ReactNode } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scaleHeight, scaleWidth } from "../utlis/responsive";
import { Fonts } from "../utlis/Fonts";
import { colors } from "../utlis/colors";

interface ListItemCardProps {
  title: string;
  items: number;
  members: number;
  totalExpense: string | number;
  visibility: "Public" | "Private";
  editIcon: ReactNode;   // ✅ svg pass karna
  shareIcon: ReactNode;  // ✅ svg pass karna
  onEdit?: () => void;
  onShare?: () => void;
}

const ListItemCard: React.FC<ListItemCardProps> = ({
  title,
  items,
  members,
  totalExpense,
  visibility,
  editIcon,
  shareIcon,
  onEdit,
  onShare,
}) => {
  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.iconRow}>
          <TouchableOpacity onPress={onEdit} style={styles.iconBtn}>
            {editIcon}
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare} style={styles.iconBtn}>
            {shareIcon}
          </TouchableOpacity>
        </View>
      </View>

      {/* Sub info */}
      <Text style={styles.subText}>
        {items} items  •  {members} Members
      </Text>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Total expense : ${totalExpense}</Text>
        </View>
        <Text style={styles.visibility}>{visibility}</Text>
      </View>
    </View>
  );
};

export default ListItemCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: scaleWidth(12),
    padding: scaleWidth(12),
    marginBottom: scaleHeight(12),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
  },
  iconBtn: {
    marginLeft: scaleWidth(8),
  },
  title: {
    fontSize: scaleWidth(15),
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
  },
  subText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
    color: "#6B7280",
    marginVertical: scaleHeight(6),
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#EAF4FF",
    paddingHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(4),
    borderRadius: 8,
  },
  badgeText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayMedium,
    color: colors.primary,
  },
  visibility: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
    color: "#6B7280",
  },
});
