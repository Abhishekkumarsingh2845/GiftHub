import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import AA from '../assets/images/i.svg';
import Contact from '../assets/images/Contact.svg';
const InviteMemberCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Invite member</Text>

      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <Contact width={60} height={60} />

        <View style={{ flex: 1, marginLeft: scaleWidth(12) }}>
          <Text style={styles.title}>Add from contacts</Text>
          <Text style={styles.subtitle}>Sync with your phone contacts</Text>
        </View>

        <AA width={40} height={40} />
      </TouchableOpacity>
    </View>
  );
};

export default InviteMemberCard;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayMedium,
    color: '#6C7278',
    marginBottom: scaleHeight(12),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: scaleHeight(2) },

    elevation: 1,
  },
  icon: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    resizeMode: 'contain',
  },
  title: {
    fontSize: scaleWidth(15),
   fontFamily: Fonts.ralewayRegular,
    color: '#0C1523',
  },
  subtitle: {
    fontSize: scaleWidth(13),
    color: '#667085',
       fontFamily: Fonts.ralewayRegular,
    marginTop: scaleHeight(2),
  },
  arrow: {
    width: scaleWidth(20),
    height: scaleWidth(20),
    tintColor: '#999',
  },
});
