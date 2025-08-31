import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const membersData = [
  { id: "1", name: "Mike Chen", role: "Contributor", type: "Viewer", isCreator: false },
  { id: "2", name: "Alex Wilson", role: "Contributor", type: "Viewer", isCreator: false },
  { id: "3", name: "Sarah Johnson", role: "Creator", type: "Creator", isCreator: true },
];

const MemberItem = ({ member, onRemove }) => {
  return (
    <View style={styles.memberCard}>
      <Image
        source={{ uri: "https://via.placeholder.com/50" }}
        style={styles.avatar}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.subText}>{member.type}</Text>
      </View>

      {member.isCreator ? (
        <View style={styles.creatorBadge}>
          <Text style={styles.creatorText}>Creator</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{member.role} ⌄</Text>
        </TouchableOpacity>
      )}

      {!member.isCreator && (
        <TouchableOpacity onPress={() => onRemove(member.id)}>
          <Text style={styles.remove}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default function MembersList() {
  const [members, setMembers] = useState(membersData);

  const handleRemove = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Members</Text>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MemberItem member={item} onRemove={handleRemove} />
        )}
      />

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addText}>+ Add Members</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f9f9fb",
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  name: { fontSize: 16, fontWeight: "500", color: "#222" },
  subText: { fontSize: 12, color: "gray" },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  dropdownText: { fontSize: 14, color: "#333" },
  creatorBadge: {
    backgroundColor: "#eef4ff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  creatorText: { color: "#4a6cff", fontSize: 12, fontWeight: "500" },
  remove: { fontSize: 18, color: "gray" },
  addBtn: { marginTop: 20, alignItems: "center" },
  addText: { color: "#4a6cff", fontSize: 16, fontWeight: "500" },
});
