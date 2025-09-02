import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

interface ProfileInfoCardProps {
  onEdit?: () => void;
}

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ onEdit }) => {
  return (
    <View style={styles.card}>
      {/* Header row */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.editText}>✏️ Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Info rows */}
      <View style={styles.infoRow}>
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.value}>Sarah</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.value}>Johnson</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.value, styles.boldValue]}>sarah.j@email.com</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Phone</Text>
        <Text style={[styles.value, styles.boldValue]}>
          +1 (555) 123-4567
        </Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Date of Birth</Text>
        <Text style={[styles.value, styles.boldValue]}>
          March 15, 1992
        </Text>
      </View>
    </View>
  );
};

export default ProfileInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1.2,
    margin: scaleWidth(10),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(12),
  },
  sectionTitle: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827',
  },
  editText: {
    fontSize: scaleWidth(14),
    color: '#2563EB', // Tailwind blue-600
    fontFamily: Fonts.ralewayMedium,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(12),
  },
  label: {
    fontSize: scaleWidth(14),
    color: '#374151', // Tailwind gray-700
    fontFamily: Fonts.ralewayRegular,
  },
  value: {
    fontSize: scaleWidth(14),
    color: '#111827',
    fontFamily: Fonts.ralewayBold,
  },
  boldValue: {
    fontFamily: Fonts.ralewayBold,
  },
});
