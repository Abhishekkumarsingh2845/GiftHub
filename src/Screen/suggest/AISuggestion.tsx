import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import PrimaryButton from '../../components/PrimaryButton';
import LongFormInput from '../../components/LongFormInput';
import GenderSelect from '../../components/GenderSelect';
import BudgetRangeInput from '../../components/BudgetRangeInput';

const AISuggestion: React.FC = () => {
  return (
    <Wrapper>
      <Header title="AI Suggestion" />
      <View style={styles.container}>
        <FormInput label={'Occasion'} placeholder="Select an occasion" />
        <FormInput label={'Age'} placeholder="Enter age" />
          <GenderSelect />
        <LongFormInput
          label="Interests"
          placeholder="Tell us about their hobbies, interests, or preferences..."
        />
           <BudgetRangeInput />
        <PrimaryButton title="Get AI Suggestions" />
      </View>
    </Wrapper>
  );
};

export default AISuggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827', // Tailwind gray-900
  },
});
