import React from 'react';
import { StyleSheet } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import RecentActivity from '../../components/RecentActivity';
import MemberList from '../../components/MemberList';
import WishCard from '../../components/WishCard';

// ✅ Corrected imports
import Avtar from '../../assets/images/Avtar.svg';
import Amazonlogo from '../../assets/images/amazon.svg';
import { useNavigation } from '@react-navigation/native';

const FamilyWishlist: React.FC = () => {
  const navigation=useNavigation()
  const onTags=()=>{
    navigation.navigate('AddSplitPaymentScreen')

  }
  return (
    <Wrapper>
      <Header title="Family Wishlist" showBack  />
      <RecentActivity  />

      <MemberList title="Alex's List" itemsCount={3} image="" />

      <MemberList title="Sarah's List" itemsCount={2} image="" expandable>
        {/* 👇 Nested WishCard */}
        <WishCard
          productTitle="Wireless Noise-Cancelling Headphones"
          productDescription="Immersive sound experience for music lovers."
          userName="Alex"
          UserAvatar={Avtar}         // ✅ Pass required SVG
          PlatformLogo={Amazonlogo}  // ✅ Pass required SVG
          onTagPress={() => console.log('Tags clicked')} // ✅ Correct prop name
        />
        <WishCard
          productTitle="Wireless Noise-Cancelling Headphones"
          productDescription="Immersive sound experience for music lovers."
          userName="Alex"
          UserAvatar={Avtar}         // ✅ Pass required SVG
          PlatformLogo={Amazonlogo}  // ✅ Pass required SVG
          onTagPress={() => console.log('Tags clicked')} // ✅ Correct prop name
          primaryButtonLabel="+ Add item to Sarah's list"
          onPrimaryButtonPress={onTags}
          showPrimaryButton={true}
        />
      </MemberList>

      <MemberList title="Alex's List" itemsCount={3} image="" />
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
});
