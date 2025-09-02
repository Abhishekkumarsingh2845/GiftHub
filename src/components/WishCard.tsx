import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scaleWidth, scaleHeight } from "../utlis/responsive";
import { Fonts } from "../utlis/Fonts";
import Blackdrop from "../assets/images/blackdropdown.svg";
import PrimaryButton from "../components/PrimaryButton"; // 👈 apna custom button import

interface WishlistItemCardProps {
  productTitle: string;
  productDescription: string;
  userName: string;
  UserAvatar: React.FC<React.SVGProps<SVGSVGElement>>;
  PlatformLogo: React.FC<React.SVGProps<SVGSVGElement>>;
  showDivider?: boolean;
  showTagButton?: boolean;
  tagLabel?: string;
  onTagPress?: () => void;
  showPrimaryButton?: boolean; // 👈 naya prop
  primaryButtonLabel?: string;
  onPrimaryButtonPress?: () => void;
}

const WishCard: React.FC<WishlistItemCardProps> = ({
  productTitle,
  productDescription,
  userName,
  UserAvatar,
  PlatformLogo,
  showDivider = true,
  showTagButton = true,
  tagLabel = "Tags",
  onTagPress,
  showPrimaryButton = false, // default false
  primaryButtonLabel = "Buy Now",
  onPrimaryButtonPress,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.row}>
          {/* Left Avatar */}
          <View style={styles.avatarSection}>
            <UserAvatar width={36} height={36} />
            <Text style={styles.userName}>{userName}</Text>
          </View>

          {/* Right Content */}
          <View style={styles.contentSection}>
            {/* Title */}
            <Text style={styles.title}>{productTitle}</Text>

            {/* Description */}
            <Text style={styles.description}>{productDescription}</Text>

            {/* Bottom Row */}
            <View style={styles.bottomRow}>
              {/* Platform */}
              <PlatformLogo width={60} height={22} />

              {/* Tag Button */}
              {showTagButton && (
                <TouchableOpacity
                  style={styles.tagButton}
                  onPress={onTagPress}
                  activeOpacity={0.8}
                >
                  <Text style={styles.tagText}>{tagLabel}</Text>
                  <Blackdrop width={12} height={12} />
                </TouchableOpacity>
              )}
            </View>

            {/* Primary Button (optional) */}
            {showPrimaryButton && (
              <View style={{ marginTop: scaleHeight(12) }}>
                <PrimaryButton
                  title={primaryButtonLabel}
                  onPress={onPrimaryButtonPress}
                />
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Divider */}
      {showDivider && <View style={styles.divider} />}
    </View>
  );
};

export default WishCard;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: scaleHeight(6),
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatarSection: {
    alignItems: "center",
    marginRight: scaleWidth(12),
  },
  userName: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayMedium,
    color: "#374151",
    marginTop: scaleHeight(4),
  },
  contentSection: {
    flex: 1,
  },
  title: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
    color: "#111827",
    marginBottom: scaleHeight(4),
  },
  description: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayRegular,
    color: "#6B7280",
    marginBottom: scaleHeight(8),
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tagButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(6),
    paddingHorizontal: scaleWidth(12),
    backgroundColor: "#fff",
  },
  tagText: {
    fontSize: scaleWidth(13),
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
    marginRight: scaleWidth(6),
  },
  divider: {
    marginTop: scaleHeight(12),
    height: 1,
    backgroundColor: "#E5E7EB",
  },
});
