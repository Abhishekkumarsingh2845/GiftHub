import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import LongFormInput from '../../components/LongFormInput';
import ImageUploadBox from '../../components/ImageUploadBox';
import PrimaryButton from '../../components/PrimaryButton';
import MembersList from '../../components/MembersList';

const CreateList: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Create List" />
      <FormInput label='List Name' placeholder='List Name '/>
      <FormInput label='Date (Optional)' placeholder='Date'/>
       <FormInput label='Choose Privacy'/>
      <LongFormInput label='Notes (Optional)' placeholder='Add any additional notes...'/>
      <ImageUploadBox/>
      <MembersList/>
      <PrimaryButton title='Create list'/>
    </Wrapper>
  );
};

export default CreateList;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginVertical: 20,
  },
});
