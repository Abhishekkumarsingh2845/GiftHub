import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import LongFormInput from '../../components/LongFormInput';
import ImageUploadBox from '../../components/ImageUploadBox';
import InviteMemberCard from '../../components/InviteMemberCard';
import EmailInvite from '../../components/EmailInvite';
import PrimaryButton from '../../components/PrimaryButton';
import MembersCard from '../../components/MembersCard';

const NewList: React.FC = () => {
  return (
    <Wrapper>
      <Header title="New List" />
      <FormInput label={'Group Name*'} placeholder="Family Wishlist" />
      <FormInput label={'Event Date'} placeholder="August 6, 2025" />
      <LongFormInput label={'Description'}  placeholder='Birthday and holiday gift ideas for everyone'/>
      <ImageUploadBox />
      <MembersCard />
      <InviteMemberCard />
      <EmailInvite heading='Email / Phone Number' />
      <EmailInvite heading='Name'  buttonText={"Add"}/>
      <PrimaryButton title="Create Group"  />
    </Wrapper>
  );
};

export default NewList;

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
