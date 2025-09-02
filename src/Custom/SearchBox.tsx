import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface SearchBoxProps {
  placeholder?: string;
  icon?: React.ReactNode; // 👈 extra prop for left icon
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder, icon }) => {
  return (
    <View style={styles.searchBox}>
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <TextInput
        placeholder={placeholder || "Search..."}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row", // 👈 so icon + input comes in row
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 10,
  },
  iconWrapper: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});
