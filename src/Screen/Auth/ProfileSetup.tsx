import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { SvgXml } from "react-native-svg";
import FormInput from "../../components/FormInput";
import { scaleWidth,scaleHeight } from "../../utlis/responsive";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton";
import Wrapper from "../../components/Wrapper";
import { Fonts } from "../../utlis/Fonts";

const { width } = Dimensions.get("window");

// 👤 User SVG (default avatar)
const userSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#0066FF">
  <circle cx="12" cy="7" r="5"/>
  <path d="M12 14c-7 0-9 4-9 6v1h18v-1c0-2-2-6-9-6z"/>
</svg>
`;

// ✏️ Edit Icon SVG
const editSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 
  7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 
  0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
</svg>
`;

// 📅 Calendar Icon SVG
const calendarSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#374151" viewBox="0 0 24 24">
  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 
  0-2 .9-2 2v14c0 1.1.9 2 2 
  2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
  16H5V9h14v11z"/>
</svg>
`;

const ProfileSetup = () => {
  const [dob, setDob] = useState("25/06/1999");
  const navigation=useNavigation()
  const handleContinue=()=>{
    navigation.navigate('HomeScreen')
  }

  return (
    <Wrapper>
    <View style={styles.container}>
      {/* Avatar */}
     <View style={styles.avatarContainer}>
  {/* Circle Avatar */}
  <View style={styles.avatarCircle}>
    <SvgXml xml={userSvg} width={60} height={60} />
  </View>

  {/* Edit Button */}
  <TouchableOpacity style={styles.editButton}>
    <SvgXml xml={editSvg} width={16} height={16} />
  </TouchableOpacity>
</View>

      {/* Inputs */}
      <FormInput label="First Name *" placeholder="First Name" />
      <FormInput label="Last Name *" placeholder="Last Name" />

      {/* Date of Birth Field */}
      <View style={{ marginTop: scaleHeight(10), marginBottom: scaleHeight(20) }}>
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.dateInputContainer}>
          <Text style={styles.dateText}>{dob}</Text>
          <TouchableOpacity>
            <SvgXml xml={calendarSvg} width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <PrimaryButton onPress={handleContinue}
      title='Continue'/>

      {/* Footer */}
      <Text style={styles.footerText}>
        You can always update your profile later in settings
      </Text>
    </View>
    </Wrapper>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleHeight(50),
  },
avatarContainer: {
  alignSelf: "center",
  marginBottom: scaleHeight(30),
  position: "relative",
},

avatarCircle: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: "#EBF3FF", // 👈 halka grey (1st ss jaisa)
  alignItems: "center",
  justifyContent: "center",
},

editButton: {
  backgroundColor: "#0066FF",
  borderRadius: 20,
  padding: 6,
  position: "absolute",
  bottom: 4,
  right: 4,
  borderWidth: 2,
  borderColor: "#fff", // 👈 white outline (clean Google-style)
},
  label: {
    fontSize: scaleWidth(16),
    color: "#374151",
    marginBottom: scaleHeight(6),
  },
  dateInputContainer: {
    height: scaleHeight(50),
    borderRadius: scaleWidth(12),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scaleWidth(16),
  },
  dateText: {
    fontSize: scaleWidth(14),
    color: "#111827",
  },
  continueButton: {
    backgroundColor: "#0066FF",
    paddingVertical: scaleHeight(14),
    borderRadius: 12,
    alignItems: "center",
    marginTop: scaleHeight(20),
  },
  continueText: {
    color: "#FFFFFF",
    fontSize: scaleWidth(16),
    fontWeight: "600",
  },
  footerText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginTop: scaleHeight(20),
    fontFamily:Fonts.ralewayRegular,
  },
});
