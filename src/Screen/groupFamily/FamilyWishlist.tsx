import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import RecentActivity from '../../components/RecentActivity';
import MemberList from '../../components/MemberList';

const FamilyWishlist: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Family Wishlist" />
      <RecentActivity/>
      <MemberList title='Alexs List' itemsCount={3} image=''/>
       <MemberList title='Alexs List' itemsCount={3} image=''/>
    </Wrapper>
  );
};

export default FamilyWishlist;

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
    borderBottomWidth: scaleWidth(1),
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
