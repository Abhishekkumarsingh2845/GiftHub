import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { scaleHeight, scaleWidth } from '../utlis/responsive';
import AA from '../assets/images/Z1.svg';
import Lightarrow from '../assets/images/rightarrow.svg';
interface ListCardProps {
  image: string;
  title: string;
  itemsCount: number;
  onPress?: () => void;
}

const MemberList: React.FC<ListCardProps> = ({
  image,
  title,
  itemsCount,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Avatar */}
      <AA width={50} height={50} />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{itemsCount} items</Text>
      </View>

      {/* Chevron */}
      {/* <Ionicons name="chevron-forward" size={scaleWidth(18)} color="#2F80ED" /> */}
      <Lightarrow width={20} height={20} />
    </TouchableOpacity>
  );
};

export default MemberList;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: scaleWidth(16),
    padding: scaleWidth(12),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    marginVertical: scaleHeight(10),
  },
  avatar: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(12),
    marginRight: scaleWidth(12),
  },
  textContainer: {
    flex: 1,
    marginLeft: scaleWidth(10),
  },
  title: {
    fontSize: scaleWidth(16),
    fontFamily: 'System',
    color: '#111',
  },
  subtitle: {
    fontSize: scaleWidth(14),
    fontFamily: 'System',
    color: '#666',
    marginTop: scaleHeight(2),
  },
});
