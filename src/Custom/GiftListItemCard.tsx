import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "./ProgressBar";
import { SvgProps } from "react-native-svg";
import { Fonts } from "../utlis/Fonts";
import Edit from "../assets/images/edit.svg";
import Delete from "../assets/images/trash.svg";
import ThreeDot from "../assets/images/threedot.svg"; // tumhari 3 dots wali icon

interface Contributor {
  id: string;
  avatar: React.FC<SvgProps>;
}

interface Props {
  variant: "budget" | "gift"; // screen type
  title: string;
  subtitle?: string;
  contributors: Contributor[];
  expenses?: number;
  budget?: number;
  status?: string;
  rs?: string; // subtitle ke neeche price
  showProgress?: boolean;

  // extra controls
  itemsCount?: string; // e.g. "5 items"
  contributorsCount?: string; // e.g. "3 contributors"
  leftTitle?: string; // e.g. "Expenses" / "Price"
  leftValue?: string; // e.g. "$320.00"
  rightTitle?: string; // e.g. "Budget" / "Status"
  rightValue?: string; // e.g. "$400.00" / "Purchased"

  showEdit?: boolean;
  showDelete?: boolean;
  showMenu?: boolean;

  splitText?: string; // e.g. "Manage Split"
  showSplit?: boolean;

  showTags?: boolean;
}

const GiftListItemCard: React.FC<Props> = ({
  variant,
  title,
  subtitle,
  contributors,
  expenses = 0,
  budget = 0,
  status,
  rs,
  showProgress = true,
  itemsCount,
  contributorsCount,
  leftTitle,
  leftValue,
  rightTitle,
  rightValue,
  showEdit = true,
  showDelete = false,
  showMenu = true,
  splitText = "Manage Split",
  showSplit = true,
  showTags = false,
}) => {
  const percentage = budget > 0 ? (expenses / budget) * 100 : 0;

  return (
    <View style={styles.card}>
      {/* ---------- Header ---------- */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          {rs && <Text style={styles.rsText}>{rs}</Text>}
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          {showEdit && (
            <TouchableOpacity>
              <Edit />
            </TouchableOpacity>
          )}
          {showDelete && (
            <TouchableOpacity>
              <Delete />
            </TouchableOpacity>
          )}
          {showMenu && (
            <TouchableOpacity>
              <ThreeDot />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* ---------- Budget Variant ---------- */}
      {variant === "budget" && (
        <>
          <View style={styles.row}>
            {itemsCount && <Text style={styles.label}>{itemsCount}</Text>}
            {contributorsCount && (
              <Text style={styles.label}>{contributorsCount}</Text>
            )}
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>{leftTitle}</Text>
              <Text style={styles.value}>{leftValue}</Text>
            </View>
            <View>
              <Text style={styles.label}>{rightTitle}</Text>
              <Text style={styles.value}>{rightValue}</Text>
            </View>
          </View>

          {showProgress ? (
            <ProgressBar progress={percentage} />
          ) : (
            <View style={styles.divider} />
          )}

          <View style={styles.footer}>
            {/* contributors */}
            <View style={styles.avatars}>
              {contributors.slice(0, 3).map((c) => {
                const AvatarIcon = c.avatar;
                return (
                  <AvatarIcon
                    key={c.id}
                    width={28}
                    height={28}
                    style={styles.avatar}
                  />
                );
              })}
              {contributors.length > 3 && (
                <View style={styles.moreCircle}>
                  <Text style={styles.moreText}>
                    +{contributors.length - 3}
                  </Text>
                </View>
              )}
            </View>

            {showSplit && (
              <TouchableOpacity style={styles.splitButton}>
                <Text style={styles.splitText}>{splitText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}

      {/* ---------- Gift Variant ---------- */}
      {variant === "gift" && (
        <>
          <View style={styles.row}>
            <View>
              <Text style={styles.label}>{leftTitle || "Price:"}</Text>
              <Text style={styles.value}>{leftValue}</Text>
            </View>
            <View>
              <Text style={styles.label}>{rightTitle || "Status:"}</Text>
              <Text style={styles.value}>{rightValue}</Text>
            </View>
          </View>

          <Text style={[styles.label, { marginVertical: 6 }]}>
            {splitText || "Payment Split"}
          </Text>

          <View style={styles.footer}>
            {/* contributors */}
            <View style={styles.avatars}>
              {contributors.slice(0, 3).map((c) => {
                const AvatarIcon = c.avatar;
                return (
                  <AvatarIcon
                    key={c.id}
                    width={28}
                    height={28}
                    style={styles.avatar}
                  />
                );
              })}
              {contributors.length > 3 && (
                <View style={styles.moreCircle}>
                  <Text style={styles.moreText}>
                    +{contributors.length - 3}
                  </Text>
                </View>
              )}
            </View>

            {showTags && (
              <TouchableOpacity style={styles.tagButton}>
                <Text style={styles.tagText}>Tags ⌄</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontFamily: Fonts.ralewayMedium },
  subtitle: { fontSize: 13, fontFamily: Fonts.ralewayRegular, color: "#666" },
  rsText: {
    fontSize: 12,
    fontFamily: Fonts.ralewaySemiBold,
    color: "#333",
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  label: { fontSize: 12, fontFamily: Fonts.ralewayRegular, color: "#666" },
  value: { fontSize: 14, fontFamily: Fonts.ralewaySemiBold },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  avatars: { flexDirection: "row" },
  avatar: { marginRight: -8 },
  moreCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: { fontSize: 12, fontWeight: "600" },
  splitButton: {
    backgroundColor: "#EAF1FF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  splitText: { color: "#2A66FF", fontWeight: "600", fontSize: 12 },
  tagButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    fontSize: 12,
    fontFamily: Fonts.ralewayMedium,
    color: "#333",
  },
});

export default GiftListItemCard;
