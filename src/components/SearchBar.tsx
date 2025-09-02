import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Srch from '../assets/images/search.svg';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Magnifying Glass Icon */}

      <Srch width={30} height={30} />
      {/* Search Input */}
      <TextInput
        placeholder="Search for products..."
        placeholderTextColor="#6B7280"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: scaleWidth(15),
    paddingHorizontal: scaleWidth(12),
    height: scaleHeight(55),
    borderWidth: 1,
    borderColor: '#E5E7EB',
   marginVertical:scaleHeight(15)
  },
  icon: {
    marginRight: scaleWidth(8),
  },
  input: {
    flex: 1,
    fontSize: scaleWidth(14),
    fontFamily:Fonts.ralewayMedium,
    color: '#111827',
  },
  });
