import React from 'react';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';



import FormInput from '../../components/FormInput'; // 👈 import your new input
import PrimaryButton from '../../components/PrimaryButton';

import Avatar from '../../assets/images/Profilepic.svg';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';



const ProfileDetail: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Edit Profile" />

      <View style={styles.form}>

        <FormInput label="First Name" placeholder="First Name" />
        <FormInput label="Last Name" placeholder="Last Name" />
           <FormInput label="Last Name" placeholder="Last Name" />
              <FormInput label="Last Name" placeholder="Last Name" />

       
        <View style={styles.avatarContainer}>
          <Avatar width={80} height={80} />
        </View>

        <FormInput label="First Name" placeholder="First Name" />
        <FormInput label="Last Name" placeholder="Last Name" />
        <FormInput label="Email" placeholder="Email" />
        <FormInput label="Phone" placeholder="Phone" />

        <FormInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <PrimaryButton title={'Save Profile'} />

        <FormInput
          label="Date of Birth"
          placeholder="Date of Birth"
          keyboardType="email-address"
        />
        <PrimaryButton title={'Save Profile'} onPress={() => {}} />

      </View>
    </Wrapper>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  form: {

    marginTop: 20,


    paddingHorizontal: scaleWidth(12),
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: scaleHeight(20),

  },
});
