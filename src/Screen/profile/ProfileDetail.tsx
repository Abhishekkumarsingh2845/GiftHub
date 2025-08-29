import React from 'react';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput'; // 👈 import your new input
import PrimaryButton from '../../components/PrimaryButton';

const ProfileDetail: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Edit Profile" />

      <View style={styles.form}>
        <FormInput label="First Name" placeholder="First Name" />
        <FormInput label="Last Name" placeholder="Last Name" />
           <FormInput label="Last Name" placeholder="Last Name" />
              <FormInput label="Last Name" placeholder="Last Name" />
        <FormInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <PrimaryButton title={'Save Profile'} />
      </View>
    </Wrapper>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
});
