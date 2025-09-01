import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import FormInput from './FormInput';
import PrimaryButton from './PrimaryButton';
import Delete from '../assets/images/Delete.svg';

interface Contributor {
  id: number;
  name: string;
  amount: string;
  date: string;
}

const PaymentContributors: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([
    { id: 1, name: '', amount: '', date: '' },
    { id: 2, name: '', amount: '', date: '' },
  ]);

  const addContributor = () => {
    setContributors([
      ...contributors,
      { id: Date.now(), name: '', amount: '', date: '' },
    ]);
  };

  const removeContributor = (id: number) => {
    setContributors(contributors.filter(c => c.id !== id));
  };

  const updateContributor = (
    id: number,
    field: keyof Contributor,
    value: string,
  ) => {
    setContributors(
      contributors.map(c => (c.id === id ? { ...c, [field]: value } : c)),
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Payment Contributors</Text>

      {contributors.map((c, index) => (
        <View key={c.id} style={styles.card}>
          {/* Header Row */}
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Contributor {index + 1}</Text>
            <TouchableOpacity onPress={() => removeContributor(c.id)}>
              <Delete width={20} height={20} />
            </TouchableOpacity>
          </View>

          {/* Name */}
          <FormInput label="Name" placeholder="John" />

          <FormInput label="Contribution Paid" placeholder="Enter amount" />

          <FormInput label="Payment Date" placeholder="2025-01-15" />
        </View>
      ))}

      <PrimaryButton title="+ Add Another Contributor" />
    </ScrollView>
  );
};

export default PaymentContributors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleWidth(16),
    backgroundColor: '#FCFCFD',

    borderRadius: scaleWidth(12),

    marginBottom: scaleHeight(14),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  header: {
    fontSize: scaleWidth(15),
    fontFamily: Fonts.ralewayBold,
    color: '#111',
    marginBottom: scaleHeight(12),
  },
  card: {
    backgroundColor: '#FCFCFD',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
    marginBottom: scaleHeight(14),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(10),
  },
  cardTitle: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayBold,
    color: '#111',
  },
  label: {
    fontSize: scaleWidth(13),
    fontFamily: Fonts.ralewayRegular,
    color: '#444',
    marginBottom: scaleHeight(4),
    marginTop: scaleHeight(6),
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: scaleWidth(8),
    paddingHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(8),
    fontSize: scaleWidth(13),
    marginBottom: scaleHeight(6),
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: scaleWidth(8),
    backgroundColor: '#F1F1F1',
    padding: scaleWidth(8),
    borderRadius: scaleWidth(8),
  },
  addButton: {
    backgroundColor: '#2F80ED',
    paddingVertical: scaleHeight(12),
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    marginTop: scaleHeight(10),
  },
  addButtonText: {
    fontSize: scaleWidth(14),
    color: '#fff',
    fontFamily: Fonts.ralewayBold,
  },
});
