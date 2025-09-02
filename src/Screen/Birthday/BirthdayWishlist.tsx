import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Wrapper from '../../components/Wrapper';
import BirthdayProductCard from '../../components/BirthdayProductCard';
import PrimaryButton from '../../components/PrimaryButton';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import { Fonts } from '../../utlis/Fonts';

const DATA = [
  {
    id: '1',
    category: 'Electronics',
    productName: 'Sony WH-1000XM5 Headphones',
    addedBy: 'Anil',
  },
  {
    id: '2',
    category: 'Electronics',
    productName: 'Microwave Combination Oven',
    addedBy: 'Mukul',
  },
  {
    id: '3',
    category: 'Electronics',
    productName: 'Noise Twist Round dial Smart Watch',
    addedBy: 'Anmol',
  },
  {
    id: '4',
    category: 'Electronics',
    productName: 'Espresso Coffee Machine',
    addedBy: 'Akash',
  },
];

const BirthdayWishlist: React.FC = () => {
  return (
    <Wrapper>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Birthday Wishlist 2025</Text>
        <Text style={styles.subtitle}>Sarah Johnson • 12 items</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BirthdayProductCard
            category={item.category}
            productName={item.productName}
            addedBy={item.addedBy}
            onShare={() => console.log(`Shared ${item.productName}`)}
            onClose={() => console.log(`Closed ${item.productName}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Primary Button fixed at bottom */}
      <View style={styles.buttonWrapper}>
        <PrimaryButton
          title="+ Add Item"
          onPress={() => console.log('Add Product Pressed')}
        />
      </View>
    </Wrapper>
  );
};

export default BirthdayWishlist;
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: scaleHeight(20),
  },
  title: {
    fontSize: scaleWidth(18),
    fontFamily: Fonts.ralewayMedium,
    color: '#000',
    marginBottom: scaleHeight(4),
  },
  subtitle: {
    fontSize: scaleWidth(14),
    color: '#666',
     fontFamily: Fonts.ralewayMedium,
  },
  listContent: {
    paddingBottom: scaleHeight(20), // space so last card isn't hidden
  },
  buttonWrapper: {
    marginBottom: scaleHeight(10),
  },
});
