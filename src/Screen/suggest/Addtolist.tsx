import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Wrapper from '../../components/Wrapper';
import WishlistCard from '../../components/WishlistCard';
import PrimaryButton from '../../components/PrimaryButton';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import { Fonts } from '../../utlis/Fonts';

const DATA = [
  {
    id: '1',
    title: 'Birthday Wishlist 2025',
    itemsCount: 12,
    totalExpense: '$200',
    updatedAt: '2 days ago',
    avatars: [
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
      'https://randomuser.me/api/portraits/women/3.jpg',
      'https://randomuser.me/api/portraits/men/4.jpg',
      'https://randomuser.me/api/portraits/women/5.jpg',
      'https://randomuser.me/api/portraits/men/6.jpg',
    ],
  },
  {
    id: '2',
    title: 'Christmas Wishlist 2025',
    itemsCount: 8,
    totalExpense: '$150',
    updatedAt: '5 days ago',
    avatars: [
      'https://randomuser.me/api/portraits/women/7.jpg',
      'https://randomuser.me/api/portraits/men/8.jpg',
      'https://randomuser.me/api/portraits/women/9.jpg',
      'https://randomuser.me/api/portraits/men/10.jpg',
    ],
  },
  {
    id: '3',
    title: 'Anniversary Wishlist',
    itemsCount: 6,
    totalExpense: '$120',
    updatedAt: '1 week ago',
    avatars: [
      'https://randomuser.me/api/portraits/women/11.jpg',
      'https://randomuser.me/api/portraits/men/12.jpg',
    ],
  },
  {
    id: '4',
    title: 'Travel Wishlist',
    itemsCount: 15,
    totalExpense: '$500',
    updatedAt: '3 weeks ago',
    avatars: [
      'https://randomuser.me/api/portraits/women/13.jpg',
      'https://randomuser.me/api/portraits/men/14.jpg',
      'https://randomuser.me/api/portraits/women/15.jpg',
    ],
  },
];

const Addtolist: React.FC = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        {/* ✅ Screen Title */}
        <Text style={styles.header}>Add to list</Text>

        {/* FlatList for wishlists */}
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <WishlistCard
              title={item.title}
              itemsCount={item.itemsCount}
              totalExpense={item.totalExpense}
              updatedAt={item.updatedAt}
              avatars={item.avatars}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        <View style={styles.buttonWrapper}>
          <PrimaryButton
            title="Add to list"
            onPress={() => {
              // TODO: Implement add to list functionality
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Addtolist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: scaleWidth(18),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827',
    textAlign: 'center',
    marginVertical: scaleHeight(16),
  },
  listContent: {
    paddingBottom: scaleHeight(0), // extra space so last card isn't hidden
  },
  buttonWrapper: {
    marginTop: scaleHeight(0),
  },
});
