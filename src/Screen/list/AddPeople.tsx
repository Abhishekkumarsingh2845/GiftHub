import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import SuggestionsList from '../../components/SuggestionsList';
import InviteMemberCard from '../../components/InviteMemberCard';
import EmailInvite from '../../components/EmailInvite';
import PrimaryButton from '../../components/PrimaryButton';

const AddPeople: React.FC = () => {
  return (
    <Wrapper>
      {/* Reusable Header */}
      <Header title="Add People" />
      <SuggestionsList />
      <InviteMemberCard />
      <EmailInvite />
      <EmailInvite heading="Phone number" placeholder="Phone number" />
      <PrimaryButton title='Add 1 Person'/>
    </Wrapper>
  );
};

export default AddPeople;

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
