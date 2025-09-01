import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import EditButtonss from "../assets/images/EditButton.svg"
import { scaleHeight, scaleWidth } from "../utlis/responsive";
import { Fonts } from "../utlis/Fonts";
import { colors } from "../utlis/colors";

export default function EditButton() {
  return (
    <View style={styles.container}>
      {/* Delete Button */}
      <TouchableOpacity style={styles.deleteBtn}>
<EditButtonss width={30} height={30}/>
        <Text style={styles.deleteText}>Delete List</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scaleHeight(20),
  },
  deleteBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "transparent",
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(20),
    borderRadius: scaleWidth(20),
    width: "45%",
  },
  deleteText: {
    color: "red",
    fontSize: scaleWidth(16),
fontFamily:Fonts.ralewayMedium,
  },
  saveBtn: {
    backgroundColor: colors.primary, // blue
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(20),
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
  },
  saveText: {
    color: "white",
    fontSize: scaleWidth(16),
fontFamily:Fonts.ralewayMedium,
  },
});

