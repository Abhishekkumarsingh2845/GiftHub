import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

const genders = ['Male', 'Female', 'Other'];

interface GenderSelectProps {
  label?: string;
  onChange?: (gender: string) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ label = 'Gender', onChange }) => {
  const [selected, setSelected] = useState<string>('Male');

  const handleSelect = (gender: string) => {
    setSelected(gender);
    onChange?.(gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {genders.map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[
              styles.option,
              selected === gender && styles.selectedOption,
            ]}
            onPress={() => handleSelect(gender)}
          >
            <Text
              style={[
                styles.optionText,
                selected === gender && styles.selectedOptionText,
              ]}
            >
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default GenderSelect;

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
    gap: scaleWidth(10),
    marginTop:scaleHeight(8),
  },
  option: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: scaleWidth(12),
    paddingVertical: scaleHeight(15),
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedOption: {
    backgroundColor: '#2563EB', // blue-600
    borderColor: '#2563EB',
  },
  optionText: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayRegular,
    color: '#111827', // gray-900
  },
  selectedOptionText: {
    color: '#FFFFFF',
    fontFamily: Fonts.ralewaySemiBold,
  },
});
