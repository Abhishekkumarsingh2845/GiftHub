import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

interface Contribution {
  name: string;
  amount: string;
  percentage: string;
}

interface ContributionCardProps {
  contributions: Contribution[];
  statusText?: string;
  onStatusPress?: () => void;
}

const ContributionCard: React.FC<ContributionCardProps> = ({
  contributions,
  statusText = 'Split Payment - Paid in Full',
  onStatusPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>Contribution Summary</Text>

      {/* Contribution Rows */}
      {contributions.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.percentage}>{item.percentage}</Text>
        </View>
      ))}

      {/* Divider */}
      <View style={styles.divider} />

      {/* Status */}
      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>Payment Status</Text>
        <TouchableOpacity style={styles.statusButton} onPress={onStatusPress}>
          <Text style={styles.statusText}>{statusText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContributionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  title: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayRegular,
    color: '#111',
    marginBottom: scaleHeight(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(6),
  },
  name: {
    fontSize: scaleWidth(13),
    color: '#444',
    flex: 1,
    fontFamily: Fonts.ralewayRegular,
  },
  amount: {
    fontSize: scaleWidth(13),
    fontFamily: Fonts.ralewayBold,
    color: '#111',
    marginRight: scaleWidth(10),
  },
  percentage: {
    fontSize: scaleWidth(13),
    color: '#444',
    fontFamily: Fonts.ralewayRegular,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E0E0E0',
    marginVertical: scaleHeight(10),
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: scaleWidth(13),
    color: '#666',
    fontFamily: Fonts.ralewayRegular,
    flex: 1,
  },
  statusButton: {
    backgroundColor: '#EEF4FF',
    paddingHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(4),
    borderRadius: scaleWidth(8),
  },
  statusText: {
    fontSize: scaleWidth(12),
    color: '#2F80ED',
    fontFamily: Fonts.ralewayRegular,
  },
});
