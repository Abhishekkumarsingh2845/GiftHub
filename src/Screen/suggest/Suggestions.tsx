import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import { Fonts } from '../../utlis/Fonts';
import SuggestionProductCard from '../../components/SuggestionProductCard';

const Suggestions: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Suggestions" />
        <View style={styles.topRow}>
          <Text style={styles.resultsText}>247 results found</Text>
          <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortText}>Sort by ↑↓</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.container}>
      
        <SuggestionProductCard
          title="Wireless Noise-Cancelling Headphones"
          description="Immersive sound experience for music lovers."
          price="$12.35"
          onAddToList={() => console.log('Added to list!')}
        />
        <SuggestionProductCard
          title="Wireless Noise-Cancelling Headphones"
          description="Immersive sound experience for music lovers."
          price="$12.35"
          onAddToList={() => console.log('Added to list!')}
        />
        <SuggestionProductCard
          title="Wireless Noise-Cancelling Headphones"
          description="Immersive sound experience for music lovers."
          price="$12.35"
          onAddToList={() => console.log('Added to list!')}
        />
      </View>
    </Wrapper>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: scaleWidth(16),
    marginTop:scaleHeight(15),
    borderWidth:0.5,
    borderColor:"#FFFFFF",
    borderRadius:20
  },
  text: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827', // Tailwind gray-900
    marginTop: scaleHeight(10),
  },
  sortButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: scaleHeight(6),
    paddingHorizontal: scaleWidth(12),
    borderRadius: scaleWidth(20),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderColor:"#D0D3D9",
  },
  sortText: {
    fontSize: scaleWidth(13),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#0C1523',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(16),
    marginTop: scaleHeight(10),
  },
  resultsText: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayRegular,
    color: '#374151', // Tailwind gray-700
  },
});
