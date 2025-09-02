import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Wrapper from "../../components/Wrapper";
import AuthHeader from "../../components/AuthHeader";
import PrimaryButton from "../../components/PrimaryButton";
import { colors } from "../../utlis/colors";
import { Fonts } from "../../utlis/Fonts";

const Verification = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigation = useNavigation();

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5 && text) {
        const nextInput = `otp-${index + 1}`;
        (global as any)[nextInput]?.focus();
      }
    }
  };

  const handleResend = () => {
    console.log("📩 Resend OTP");
  };

  const handleVerify = () => {
    const code = otp.join("");
    console.log("✅ Verifying OTP:", code);
    navigation.navigate("ContactPermission");
  };

  const handleEditNumber = () => {
    console.log("✏️ Edit number clicked");
    navigation.goBack(); // ya phir jis screen pe edit karna ho waha bhej do
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header */}
        <AuthHeader title="Verify Your Number" 
        subtitle="Enter the 6-digit code sent to  "
        title2="+1 (555) 123-4567 "
        title3="Edit"/>

        {/* Subtitle with Edit link */}
        
       

        {/* Mobile Number Label */}
        <Text style={styles.label}>Mobile Number</Text>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => ((global as any)[`otp-${index}`] = ref)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        {/* Resend */}
        <Text style={styles.resendText}>Didn’t receive the code?</Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendLink}>Resend it</Text>
        </TouchableOpacity>

        {/* Button */}
        
        <PrimaryButton title="Verify & Continue" onPress={handleVerify}  style={{marginTop:90}}/>

        {/* Footer Note */}
        <Text style={styles.footerText}>
          By continuing, you agree to our{" "}
          <Text style={styles.link}>Privacy Policy</Text> and{" "}
          <Text style={styles.link}>Terms of Service</Text>.
        </Text>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFF",
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginTop: 8,
    marginBottom: 25,
    fontFamily: Fonts.ralewayMedium,
  },
  phoneNumber: {
    fontWeight: "700",
    color: "#0B0B0B",
  },
  editLink: {
    color: colors.primary,
    fontWeight: "600",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    color: "#0B0B0B",
    fontFamily: Fonts.ralewayMedium,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  otpInput: {
    width: 50,
    height: 55,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#0B0B0B",
    backgroundColor: "#FFFFFF",
  },
  resendText: {
    textAlign: "center",
    marginTop: 10,
    color: "#7D7D7D",
    fontFamily: Fonts.ralewayMedium,
    
  },
  resendLink: {
    textAlign: "center",
    marginTop: 5,
    color: colors.primary,
    fontWeight: "600",
    fontSize: 15,
    top:60,
    fontFamily:Fonts.ralewayMedium

  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    color: "#7D7D7D",
    marginTop: 15,
    fontFamily: Fonts.ralewayMedium,
  },
  link: {
    color: colors.primary,
    fontWeight: "600",
  },
});
