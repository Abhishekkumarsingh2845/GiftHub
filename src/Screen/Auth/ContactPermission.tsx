import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthHeader from "../../components/AuthHeader"; // custom component
import PrimaryButton from "../../components/PrimaryButton"; // custom component
import { Fonts } from "../../utlis/Fonts";
import { colors } from "../../utlis/colors";

const ContactPermission = () => {
  const navigation = useNavigation();

  const handleMaybe = () => {
    navigation.navigate("ProfileSetup");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <AuthHeader
        title="Sync Your Contacts"
        subtitle="Find friends who are already on GiftBox and "
        title2='easily send gifts to people in your contacts.'
      />

      {/* Bullet Points */}
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>✓ Discover friends already using GiftBox</Text>
        <Text style={styles.bullet}>✓ Send gifts with just a few taps</Text>
        <Text style={styles.bullet}>✓ Get notified of friends' special days</Text>
      </View>

      {/* Buttons */}
      <PrimaryButton
        title="Allow Contact Access"
        onPress={() => {}}
      />
      <PrimaryButton
        title="Maybe Later"
        onPress={handleMaybe}
        style={{backgroundColor:'white'}}
        textStyle={{color:colors.primary}}
    
      />

      {/* Footer Note */}
      <Text style={styles.footerText}>
        Your contacts are encrypted and never shared with third parties. You can
        change this setting anytime in your privacy settings.
      </Text>
    </View>
  );
};

export default ContactPermission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  bulletContainer: {
  
    marginBottom: 40,
  },
  bullet: {
    fontSize: 15,
    color: "#333",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
marginTop:10,
fontFamily:Fonts.ralewayRegular,
 
    lineHeight: 18,
  },
});
