import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from '../assets/images/logo.svg' // apna Logo svg import karo
import { Fonts } from "../utlis/Fonts";
import { colors } from "../utlis/colors";

type Props = {
  title: string;
  subtitle?: string;
    title2: string;
       title3: string;

};

const AuthHeader: React.FC<Props> = ({ title, subtitle ,title2,title3}) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo width={40} height={32} />
        <Text style={styles.logoText}>GiftHub</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Subtitle (Optional) */}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={{flexDirection:'row'}}>
         <Text style={styles.subtitle}>{title2}</Text>
         <TouchableOpacity> <Text style={styles.edit}>{title3}</Text></TouchableOpacity>
      </View>
        
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 30,
    marginTop:60
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 60,
  },
  logoText: {
    fontSize: 20,
    fontFamily: Fonts.ralewaySemiBold,
    color: colors.text,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.ralewayBold,
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: Fonts.ralewayMedium,
    color: colors.gray,
    lineHeight: 22,
  },
  edit: {
    fontSize: 15,
    fontFamily: Fonts.ralewayMedium,
    color: colors.primary,
    lineHeight: 22,
  },
});
