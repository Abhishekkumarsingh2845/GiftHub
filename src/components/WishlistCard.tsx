import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { scaleWidth, scaleHeight } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import { colors } from '../utlis/colors';

interface WishlistCardProps {
  title: string;
  itemsCount: number;
  totalExpense: string;
  updatedAt: string;
  avatars: string[];
}

const WishlistCard: React.FC<WishlistCardProps> = ({
  title,
  itemsCount,
  totalExpense,
  updatedAt,
  avatars,
}) => {
  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.checkbox} />
      </View>

      {/* Items count */}
      <Text style={styles.itemsText}>{itemsCount} items</Text>

      {/* Expense */}
      <View style={styles.expenseBox}>
        <Text style={styles.expenseText}>Total expense : {totalExpense}</Text>
      </View>

      {/* Avatars & Updated time */}
      <View style={styles.footerRow}>
        <View style={styles.avatarRow}>
          {avatars.slice(0, 5).map((avatar, index) => (
            <Image
              key={index}
              source={{ uri: avatar }}
              style={[styles.avatar, { marginLeft: index === 0 ? 0 : -15 }]}
            />
          ))}
          {avatars.length > 5 && (
            <View style={styles.moreCircle}>
              <Text style={styles.moreText}>+{avatars.length - 5}</Text>
            </View>
          )}
        </View>
        <Text style={styles.updatedText}>Updated {updatedAt}</Text>
      </View>
    </View>
  );
};

export default WishlistCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
    marginVertical: scaleHeight(8),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: scaleWidth(15),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827',
  },
  checkbox: {
    width: scaleWidth(22),
    height: scaleWidth(22),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: scaleWidth(4),
  },
  itemsText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
    color: '#6B7280',
    marginTop: scaleHeight(4),
  },
  expenseBox: {
    backgroundColor: '#EBF3FF',
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(4),
    paddingHorizontal: scaleWidth(10),
    marginTop: scaleHeight(8),
    alignSelf: 'flex-start',
  },
  expenseText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayMedium,
    color: '#111827',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleHeight(10),
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: scaleWidth(28),
    height: scaleWidth(28),
    borderRadius: scaleWidth(14),
    borderWidth: 2,
    borderColor: '#fff',
  },
  moreCircle: {
    width: scaleWidth(28),
    height: scaleWidth(28),
    borderRadius: scaleWidth(30),
    backgroundColor: '#EBF3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
  },
  moreText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827',
  },
  updatedText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
    color: '#0C1523',
  },
});
