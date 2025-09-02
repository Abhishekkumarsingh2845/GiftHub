// ToggleTabs.tsx
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  activeTab: string;
  onChange: (tab: string) => void;
}

const ToggleTabs: React.FC<Props> = ({ activeTab, onChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Lists" && styles.activeTab]}
        onPress={() => onChange("Lists")}
      >
        <Text style={[styles.text, activeTab === "Lists" && styles.activeText]}>
          Lists
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Groups" && styles.activeTab]}
        onPress={() => onChange("Groups")}
      >
        <Text style={[styles.text, activeTab === "Groups" && styles.activeText]}>
          Groups
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F2F4F7",
    borderRadius: 30,
    padding: 4,
    marginVertical: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#2A66FF",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
  },
  activeText: {
    color: "#fff",
  },
});

export default ToggleTabs;
