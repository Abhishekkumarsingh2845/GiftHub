import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { Fonts } from '../utlis/Fonts';
import { scaleWidth, scaleHeight } from '../utlis/responsive';

interface LongFormInputProps extends TextInputProps {
  label: string;
}

const LongFormInput: React.FC<LongFormInputProps> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder || label}
        placeholderTextColor="#6B7280"
        multiline
        textAlignVertical="top" // ensures text starts at the top
        {...props}
      />
    </View>
  );
};

export default LongFormInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: scaleHeight(10),
  },
  label: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayMedium,
    color: '#374151', // Tailwind gray-700
    marginBottom: scaleHeight(6),
  },
  input: {
    height: scaleHeight(120), // taller for long text
    borderRadius: scaleWidth(12),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(12),
    fontSize: scaleWidth(14),
    color: '#111827', // Tailwind gray-900
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    marginTop: scaleHeight(10),
    elevation: 1,
    fontFamily: Fonts.ralewayRegular,
   
  },
});
