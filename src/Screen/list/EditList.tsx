import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import FormInput from '../../components/FormInput';
import LongFormInput from '../../components/LongFormInput';
import ImageUploadBox from '../../components/ImageUploadBox';
import MembersList from '../../components/MembersList';
import EditButton from '../../components/EditButton';

const EditList: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Edit List" />

      <FormInput label='List Name' placeholder='List Name '/>
      <FormInput label='Date (Optional)' placeholder='Date'/>
       <FormInput label='Choose Privacy'/>
      <LongFormInput label='Notes (Optional)' placeholder='Add any additional notes...'/>
      <ImageUploadBox/>
      <MembersList/>
      <EditButton/>
    </Wrapper>
  );
};

export default EditList;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginVertical: 20,
  },
});
