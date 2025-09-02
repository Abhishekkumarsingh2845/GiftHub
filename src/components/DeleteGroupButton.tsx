import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Delete from "../assets/images/Delete.svg";
import { scaleHeight, scaleWidth } from "../utlis/responsive";

interface DeleteGroupButtonProps {
  onPress: () => void;
}

const DeleteGroupButton: React.FC<DeleteGroupButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
<Delete width={ 30} height={30}/>
      <Text style={styles.text}>Delete Group</Text>
    </TouchableOpacity>
  );
};

export default DeleteGroupButton;


const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: scaleWidth(1.5),
    borderColor: "rgba(255,59,48,0.5)", // light red border
    borderRadius: scaleWidth(20), // pill shape
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(20),
    backgroundColor: "transparent",
  },
  text: {
    color: "#FF3B30",
    fontSize: scaleWidth(16),
    fontFamily: "System",
    marginLeft: scaleWidth(8),
  },
});
