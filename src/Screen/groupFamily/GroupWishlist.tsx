import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import EventCard from '../../components/giftList';
import FormInput from '../../components/FormInput';
import SaveButton from '../../components/SaveButton';

const GroupWishlist: React.FC = () => {
  return (
    <Wrapper>
      <Header title={'Join Group'} />
      <EventCard/>
      <FormInput label='Set Your Display Name (Optional)' placeholder='Enter your name'/>
      <SaveButton  cancelText="Preview Gift List First"
  saveText="Join Group"/>
    </Wrapper>
  );
};

export default GroupWishlist;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9f9fb',
    padding: scaleWidth(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleHeight(12),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: scaleWidth(20),
    fontFamily: 'System',
    color: '#222',
  },
  headerAction: {
    fontSize: scaleWidth(16),
    color: '#2F80ED',
    fontFamily: 'System',
  },
  body: {
    marginTop: scaleHeight(20),
  },
  text: {
    fontSize: scaleWidth(16),
    color: '#333',
    fontFamily: 'System',
  },
});
