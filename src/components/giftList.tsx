import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import Group from '../assets/images/Group.svg';
import P1 from '../assets/images/P1.svg';
import { Fonts } from '../utlis/Fonts';

const participants = [
  { id: 1, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, image: 'https://randomuser.me/api/portraits/women/3.jpg' },
];

const giftList = [
  {
    id: '1',
    title: 'Wireless Noise- Cancelling Headphones',
    price: '$12.35',
    available: true,
    icon: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png', // headphones icon
  },
  {
    id: '2',
    title: 'Wireless Noise- Cancelling Headphones',
    price: '$12.35',
    available: true,
    icon: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png',
  },
];

const EventCard: React.FC = () => {
  return (
    <View style={styles.card}>
      {/* Event Icon */}
      <View style={styles.iconWrapper}>
        <Group width={50} height={50} />
      </View>

      {/* Event Info */}
      <Text style={styles.title}>Sarah's Birthday Party</Text>
      <Text style={styles.subtitle}>Participants (5)</Text>

      {/* Participants Row */}
      <View style={styles.participantsRow}>
        {participants.map(p => (
          <Image key={p.id} source={{ uri: p.image }} style={styles.avatar} />
        ))}
        <View style={styles.extraCircle}>
          <Text style={styles.extraText}>+2</Text>
        </View>
      </View>

      <View style={styles.separator} />

      {/* Gift List Preview */}
      <Text style={styles.sectionTitle}>Gift List Preview</Text>

      <View style={styles.giftList}>
        {giftList.map(gift => (
          <View key={gift.id} style={styles.giftItem}>
            <P1 width={40} height={40} />
            <View style={{ flex: 1 }}>
              <Text style={styles.giftTitle}>{gift.title}</Text>
              <Text style={styles.giftPrice}>{gift.price}</Text>
            </View>
            <Text style={styles.available}>Available</Text>
          </View>
        ))}

        {/* More items */}
        <TouchableOpacity>
          <Text style={styles.moreItems}>+ 3 more items</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(16),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
    margin: scaleWidth(12),
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scaleHeight(8),
  },
  icon: {
    fontSize: scaleWidth(40),
  },
  title: {
    fontSize: scaleWidth(18),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayRegular,
    color: '#666',
    textAlign: 'center',
    marginTop: scaleHeight(4),
  },
  participantsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleHeight(10),
  },
  avatar: {
    width: scaleWidth(36),
    height: scaleWidth(36),
    borderRadius: scaleWidth(18),
    marginRight: -12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  extraCircle: {
    width: scaleWidth(36),
    height: scaleWidth(36),
    borderRadius: scaleWidth(18),
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scaleWidth(6),
  },
  extraText: {
    color: '#333',
    fontSize: scaleWidth(12),
    fontFamily: 'System',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: scaleHeight(12),
  },
  sectionTitle: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayRegular,
    marginBottom: scaleHeight(10),
    color: '#111',
  },
  giftList: {
    backgroundColor: '#FFFFFF',
    borderRadius: scaleWidth(10),
    padding: scaleWidth(12),
    borderWidth: 0.8,
    borderColor: '#EAEAEA',
  },
  giftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleHeight(8),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  giftIcon: {
    width: scaleWidth(30),
    height: scaleWidth(30),
    marginRight: scaleWidth(12),
  },
  giftTitle: {
    fontSize: scaleWidth(13),
 fontFamily: Fonts.ralewayRegular,
    color: '#222',
  },
  giftPrice: {
    fontSize: scaleWidth(13),
    color: '#666',
    marginTop: scaleHeight(2),
  },
  available: {
    color: '#2F80ED',
    fontSize: scaleWidth(13),
 fontFamily: Fonts.ralewayRegular,
  },
  moreItems: {
    textAlign: 'center',
    color: '#0C1523',
    marginTop: scaleHeight(10),
    fontSize: scaleWidth(14),
  },
});
