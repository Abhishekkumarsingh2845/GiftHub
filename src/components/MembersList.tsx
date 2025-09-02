import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Profilepic from "../assets/images/Sample2.svg";

const membersData = [
  { id: "1", name: "Mike Chen", role: "Contributor", type: "Viewer", isCreator: false },
  { id: "2", name: "Alex Wilson", role: "Contributor", type: "Viewer", isCreator: false },
  { id: "3", name: "Sarah Johnson", role: "Creator", type: "Creator", isCreator: true },
];

const MemberItem = ({ member, onRemove }) => {
  return (
    <View style={styles.memberCard}>
      <Profilepic width={40} height={40} />
      <View style={{ flex: 1, marginLeft: 10 }}>
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
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    borderRadius: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",


  
  },
  name: { fontSize: 16, fontWeight: "500", color: "#222" },
  subText: { fontSize: 13, color: "gray" },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  dropdownText: { fontSize: 14, color: "#333" },
  creatorBadge: {
    backgroundColor: "#eef4ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  creatorText: { color: "#4a6cff", fontSize: 13, fontWeight: "500" },
  remove: { fontSize: 18, color: "gray" },
  addBtn: { marginTop: 20, alignItems: "center" },
  addText: { color: "#4a6cff", fontSize: 16, fontWeight: "500" },
  separator: { height: 10 }, // spacing between cards
});
