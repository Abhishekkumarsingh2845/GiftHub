// src/screens/LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Wrapper from "../../components/Wrapper";
import PrimaryButton from "../../components/PrimaryButton";
import SocialButton from "../../components/SocialButton";
import GoogleIcon from "../../assets/images/googleicon.svg";
import AppleIcon from "../../assets/images/apple.svg";
import Logo from "../../assets/images/logo.svg";
import { colors } from "../../utlis/colors";
import { Fonts } from "../../utlis/Fonts";
import AuthHeader from "../../components/AuthHeader";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const onContinue = () => {
    navigation.navigate("Verification");
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Logo */}
       <AuthHeader
  title="Get Started now" 
  subtitle="Create an account or log in to explore about our app" 
/>

        {/* Mobile Number Input */}
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.phoneRow}>
          {/* Country Code Dropdown (Static +91 for now) */}
          <TouchableOpacity style={styles.countryContainer}>
            <Text style={styles.countryCode}>+91</Text>
            <Text style={styles.dropdownIcon}>⌄</Text>
          </TouchableOpacity>

          {/* Phone Input */}
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Continue Button */}
        <PrimaryButton title="Log In" onPress={onContinue} />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or login with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <SocialButton
          icon={<GoogleIcon width={22} height={22} />}
          text="Continue with Google"
          onPress={() => {}}
        />
        <SocialButton
          icon={<AppleIcon width={22} height={22} />}
          text="Continue with Apple"
          onPress={() => {}}
        />
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 40,
  },

  // Logo
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginLeft: 8,
    fontFamily:Fonts.ralewaySemiBold
  },

  // Titles
  title: {
    fontSize: 24,
 
    color: colors.text,
    marginBottom: 6,
    fontFamily:Fonts.ralewayBold
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 30,
    fontFamily:Fonts.ralewayMedium,
   
  },

  // Input Label
  label: {
    fontSize: 14,
    fontFamily:Fonts.ralewayMedium,
    color: colors.text,
    marginBottom: 8,
  },

  // Phone Row
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    height: 50,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  countryCode: {
    fontSize: 16,
     fontFamily:Fonts.ralewayMedium,
    color: colors.text,
  },
  dropdownIcon: {
    fontSize: 14,
    color: colors.gray,
    marginLeft: 6,
  },
  phoneInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 0,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    fontSize: 16,
    color: colors.text,
      fontFamily:Fonts.ralewayMedium,
  },

  // Divider
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  orText: {
    fontSize: 13,
    color: colors.gray,
    marginHorizontal: 8,
    fontFamily:Fonts.ralewayMedium
  },
});
