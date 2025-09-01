import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import PurchaseCard from '../../components/PurchaseCard';
import FormInput from '../../components/FormInput';
import PriceComparison from '../../components/PriceComparison';
import EditButton from '../../components/EditButton';
import SaveButton from '../../components/SaveButton';

const UpdatePurchase: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Update Purchase" />
      <PurchaseCard
        title={'Wireless Noise- Cancelling Headphones'}
        description={'Immersive sound experience for music lovers.'}
      />
      <FormInput label={'Price'} placeholder="299.99" />
      <FormInput label={'Purchase Date'} placeholder="2025-01-15" />
      <FormInput label="Retailor" />
      <PriceComparison
        prices={[
          { store: 'Flipkart', price: '$299.99' },
          { store: 'Amazon', price: '$299.99' },
          { store: 'Snapdeal', price: '$299.99' },
          { store: 'BigArt', price: '$299.99' },
        ]}
      />
      <SaveButton/>
    </Wrapper>
  );
};

export default UpdatePurchase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#111827',
  },
});
