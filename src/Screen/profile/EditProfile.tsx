import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ProfileInfoCard from '../../components/ProfileInfoCard';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import { Fonts } from '../../utlis/Fonts';
import Header from '../../components/Header';
import Sample from "../../assets/images/Profilepic.svg"

const EditProfile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Header title="Profile" />
          {/* Profile Picture */}
         <Sample width={120} height={100}/>

          {/* Name */}
          <Text style={styles.name}>Zain Dokidis</Text>
          <Text style={styles.member}>Member since 2023</Text>
        </View>

        <ProfileInfoCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: scaleHeight(20),
  },
  header: {
    alignItems: 'center',
    marginTop: scaleHeight(20),
    marginBottom: scaleHeight(20),
    backgroundColor: '#EDF1F7',
    paddingBottom: scaleHeight(20),
    height: scaleHeight(250),
  },
  avatar: {
    width: scaleWidth(90),
    height: scaleWidth(90),
    borderRadius: scaleWidth(45),
    marginBottom: scaleHeight(12),
  },
  name: {
    fontSize: scaleWidth(18),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827', // Tailwind gray-900
    marginTop:scaleHeight(10),
  },
  member: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayRegular,
    color: '#6B7280', // Tailwind gray-500
    marginTop: scaleHeight(4),
  },
});
