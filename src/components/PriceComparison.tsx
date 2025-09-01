import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

interface PriceItem {
  store: string;
  price: string;
}

interface PriceComparisonProps {
  title?: string;
  prices: PriceItem[];
}

const PriceComparison: React.FC<PriceComparisonProps> = ({
  title = 'Price Comparison',
  prices,
}) => {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Price List */}
      {prices.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.store}>{item.store}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default PriceComparison;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: scaleWidth(16),
    padding: scaleWidth(16),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 1,
  },
  title: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111',
    marginBottom: scaleHeight(12),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleHeight(6),
  },
  store: {
    fontSize: scaleWidth(14),
    color: '#6C7278',
    fontFamily: Fonts.ralewaySemiBold,
  },
  price: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#0C1523',
  },
});
