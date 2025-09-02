import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import AmazonLogo from "../../assets/images/amazon.svg";
import Avtar from "../../assets/images/listavtar.svg";

import Header from "../../components/Header";
import { Fonts } from "../../utlis/Fonts";

interface Contributor {
  id: string;
  avatar: React.FC<any>;
}

interface GiftItem {
  id: string;
  title: string;
  description: string;
  owner: string;
  store: string;
}

interface MemberList {
  id: string;
  name: string;
  items: GiftItem[];
}

// -------- Gift Item Card --------
const GiftItemCard = ({ item }: { item: GiftItem }) => {
  return (
    <View style={styles.itemCard}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avtar width={32} height={32} style={{ marginRight: 8 }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDesc}>{item.description}</Text>
          <Text style={styles.ownerText}>{item.owner}</Text>
        </View>
      </View>

      <View style={styles.itemFooter}>
        <AmazonLogo width={60} height={20} />
        <TouchableOpacity style={styles.tagsButton}>
          <Text style={styles.tagsText}>Tags ⌄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// -------- Member List --------
const MemberListCard = ({ member }: { member: MemberList }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.memberCard}>
      <TouchableOpacity
        style={styles.memberHeader}
        onPress={() => setExpanded(!expanded)}
      >
        <Avtar width={40} height={40} />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={styles.memberName}>{member.name}'s List</Text>
          <Text style={styles.memberCount}>{member.items.length} items</Text>
        </View>
        <Text style={styles.arrow}>{expanded ? "⌄" : "›"}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.memberItems}>
          {member.items.map((gift) => (
            <GiftItemCard key={gift.id} item={gift} />
          ))}

          <TouchableOpacity style={styles.addItemBtn}>
            <Text style={styles.addItemBtnText}>
              + Add item to {member.name}'s list
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// -------- Main Screen --------
const FamilyWishlistScreen = () => {
  const contributors: Contributor[] = [
    { id: "1", avatar: Avtar },
    { id: "2", avatar: Avtar },
    { id: "3", avatar: Avtar },
  ];

  const memberLists: MemberList[] = [
    {
      id: "1",
      name: "Alex",
      items: [
        {
          id: "i1",
          title: "Wireless Noise-Cancelling Headphones",
          description: "Immersive sound experience for music lovers.",
          owner: "Alex",
          store: "amazon",
        },
      ],
    },
    {
      id: "2",
      name: "Sarah",
      items: [
        {
          id: "i2",
          title: "Wireless Noise-Cancelling Headphones",
          description: "Immersive sound experience for music lovers.",
          owner: "Alex",
          store: "amazon",
        },
        {
          id: "i3",
          title: "Wireless Noise-Cancelling Headphones",
          description: "Immersive sound experience for music lovers.",
          owner: "Mike",
          store: "amazon",
        },
      ],
    },
    {
      id: "3",
      name: "Mike",
      items: [
        {
          id: "i4",
          title: "Wireless Noise-Cancelling Headphones",
          description: "Immersive sound experience for music lovers.",
          owner: "Mike",
          store: "amazon",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Family Wishlist" showBack />

      {/* Recent Activity */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>

        <View style={styles.activityHeader}>
          <View style={{ flex: 1 }}>
            <Text style={styles.activityTitle}>Family Wishlist</Text>
            <Text style={styles.activityDesc}>
              Birthday and holiday gift ideas for everyone
            </Text>
            <View style={styles.dateRow}>
              <Text style={styles.calendarIcon}>📅</Text>
              <Text style={styles.dateText}>Created: May 15, 2025</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>

        {/* contributors avatars + button */}
        <View style={styles.activityFooter}>
          <View style={styles.avatarRow}>
            {contributors.map((c, index) => {
              const AvatarIcon = c.avatar;
              return (
                <AvatarIcon
                  key={c.id}
                  width={32}
                  height={32}
                  style={[styles.avatar, { marginLeft: index === 0 ? 0 : -10 }]}
                />
              );
            })}
            <View style={styles.moreCircle}>
              <Text style={styles.moreText}>+2</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.addMemberButton}>
            <Text style={styles.addMemberText}>+ Add Member</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Member Lists */}
      <View style={styles.sectionCard}>
        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Member Lists</Text>
          <Text style={styles.memberCountText}>5 members</Text>
        </View>

        <FlatList
          data={memberLists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MemberListCard member={item} />}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB", padding: 12 },

  // Section
  sectionCard: {
    backgroundColor: "#fff",
    padding: 14,
    marginVertical: 8,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: Fonts.ralewaySemiBold,
    marginBottom: 8,
    color: "#111",
  },

  // Recent Activity
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  activityTitle: { fontSize: 15, fontFamily: Fonts.ralewayMedium },
  activityDesc: { fontSize: 13, color: "#666", marginVertical: 4 },
  dateRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  calendarIcon: { marginRight: 4 },
  dateText: { fontSize: 12, color: "#999" },
  editIcon: { fontSize: 16, color: "#444" },

  activityFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  avatarRow: { flexDirection: "row", alignItems: "center" },
  avatar: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -8,
  },
  moreText: { fontSize: 12, fontWeight: "600", color: "#333" },
  addMemberButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  addMemberText: {
    fontSize: 13,
    color: "#2D55FF",
    fontFamily: Fonts.ralewayMedium,
  },

  // Member Lists
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  memberCountText: { fontSize: 13, color: "#666" },
  memberCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 6,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#eee",
  },
  memberHeader: { flexDirection: "row", alignItems: "center", padding: 10 },
  memberName: { fontSize: 14, fontFamily: Fonts.ralewaySemiBold },
  memberCount: { fontSize: 12, color: "#666" },
  arrow: { fontSize: 20, color: "#666" },
  memberItems: { paddingHorizontal: 8, marginBottom: 10 },
  itemCard: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  itemTitle: { fontSize: 14, fontFamily: Fonts.ralewaySemiBold },
  itemDesc: { fontSize: 12, color: "#666", marginTop: 2 },
  ownerText: { fontSize: 11, color: "#444", marginTop: 2 },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  tagsButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tagsText: { fontSize: 12, color: "#333" },

  addItemBtn: {
    backgroundColor: "#EEF2FF",
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
  },
  addItemBtnText: {
    fontSize: 13,
    fontFamily: Fonts.ralewayMedium,
    color: "#2D55FF",
    textAlign: "center",
  },
});

export default FamilyWishlistScreen;
