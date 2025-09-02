import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Fonts } from '../utlis/Fonts';
import { scaleWidth, scaleHeight } from '../utlis/responsive';

interface BudgetRangeInputProps {
  label?: string;
  minValue?: string;
  maxValue?: string;
  onMinChange?: (value: string) => void;
  onMaxChange?: (value: string) => void;
}

const BudgetRangeInput: React.FC<BudgetRangeInputProps> = ({
  label = 'Budget Range',
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Min ($)"
          placeholderTextColor="#6B7280"
          keyboardType="numeric"
          value={minValue}
          onChangeText={onMinChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Max ($)"
          placeholderTextColor="#6B7280"
          keyboardType="numeric"
          value={maxValue}
          onChangeText={onMaxChange}
        />
      </View>
    </View>
  );
};

export default BudgetRangeInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: scaleHeight(12),
  },
  label: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayMedium,
    color: '#374151', // gray-700
    marginBottom: scaleHeight(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scaleWidth(12),
  },
  input: {
    flex: 1,
    height: scaleHeight(50),
    borderRadius: scaleWidth(12),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scaleWidth(14),
    fontSize: scaleWidth(14),
    color: '#111827', // gray-900
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontFamily: Fonts.ralewayRegular,
  },
});
