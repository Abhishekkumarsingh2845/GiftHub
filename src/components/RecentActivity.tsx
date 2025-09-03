import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
} from "react-native";
import { scaleHeight, scaleWidth } from "../utlis/responsive";
import { Fonts } from "../utlis/Fonts";

interface Member {
  uri: string;
}

interface RecentActivityProps {
  title: string;
  subtitle: string;
  createdDate: string;
  members: Member[];
  extraMembers?: number;
  onEdit?: () => void;
  onDelete?: () => void;
  showSeeAll?: boolean;
  onSeeAll?: () => void;
  EditIcon?: React.FC<any>; // SVG from parent
  CalendarIcon?: React.FC<any>;
  ActionIcon?: React.FC<any>;
  showTitle?:boolean
}

const RecentActivity: React.FC<RecentActivityProps> = ({
  title,
  subtitle,
  createdDate,
  members,
  extraMembers = 0,
  onEdit,
  onDelete,
  showSeeAll = false,
  onSeeAll,
  EditIcon,
  CalendarIcon,
  ActionIcon,
  showTitle

}) => {
  return (
    <View style={styles.container}>
      {/* Header with optional See all */}
      <View style={styles.headerRow}>
{showTitle &&  <Text style={styles.heading}>Recent Activity</Text>}
        
        {showSeeAll && (
          <TouchableOpacity onPress={onSeeAll}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.linkText}>{title}</Text>
          {onEdit && EditIcon && (
            <TouchableOpacity onPress={onEdit}>
              <EditIcon width={24} height={24} />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.subtitle}>{subtitle}</Text>

        {/* Created Date */}
        <View style={styles.dateRow}>
          {CalendarIcon && <CalendarIcon width={20} height={20} />}
          <Text style={styles.dateText}>Created: {createdDate}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.avatarGroup}>
            {members.slice(0, 3).map((m, i) => (
              <Image key={i} source={{ uri: m.uri }} style={styles.avatar} />
            ))}
            {extraMembers > 0 && (
              <View style={styles.moreAvatar}>
                <Text style={styles.moreText}>+{extraMembers}</Text>
              </View>
            )}
          </View>

          {ActionIcon && (
            <TouchableOpacity style={styles.addButton}>
              <ActionIcon width={20} height={20} />
              <Text style={styles.addButtonText}>Add Member</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default RecentActivity;

const styles = StyleSheet.create({
  container: {},
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scaleHeight(8),
  },
  heading: {
    fontSize: scaleWidth(18),
    color: "#333",
    fontFamily: Fonts.ralewayBold,
  },
  seeAll: {
    fontSize: scaleWidth(14),
    color: "#2F80ED",
    fontFamily: Fonts.ralewayMedium,
  },
  card: {
    backgroundColor: "white",
    borderRadius: scaleWidth(16),
    padding: scaleWidth(14),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scaleHeight(6),
  },
  linkText: {
    fontSize: scaleWidth(16),
    color: "black",
    textDecorationLine: "underline",
    fontFamily: Fonts.ralewayMedium,
  },
  subtitle: {
    fontSize: scaleWidth(14),
    color: "#444",
    marginBottom: scaleHeight(10),
    fontFamily: Fonts.ralewayMedium,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scaleHeight(6),
  },
  dateText: {
    fontSize: scaleWidth(13),
    color: "#666",
    marginLeft: scaleWidth(6),
    fontFamily: Fonts.ralewayMedium,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scaleHeight(10),
  },
  avatarGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(16),
    marginRight: -scaleWidth(8),
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreAvatar: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(16),
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: scaleWidth(4),
  },
  moreText: {
    fontSize: scaleWidth(13),
    fontFamily: Fonts.ralewayMedium,
    color: "#333",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAF3FF",
    paddingVertical: scaleHeight(6),
    paddingHorizontal: scaleWidth(10),
    borderRadius: scaleWidth(8),
  },
  addButtonText: {
    color: "#2F80ED",
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayMedium,
    marginLeft: scaleWidth(4),
  },
});
