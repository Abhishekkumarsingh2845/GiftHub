import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import PP from '../assets/images/P1.svg';
import { Fonts } from '../utlis/Fonts';
import { colors } from '../utlis/colors';

interface ProductCardProps {
  title: string;
  description: string;
  badgeText?: string;
  onTagPress?: () => void;
}

const PurchaseCard: React.FC<ProductCardProps> = ({
  title,
  description,
  badgeText = 'Affiliate Item',
  onTagPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badgeText}</Text>
      </View>

      {/* Row Content */}
      <View style={styles.row}>
        {/* Product Image (center aligned) */}
        <View style={styles.imageWrapper}>
          <PP width={scaleWidth(50)} height={scaleWidth(50)} />
        </View>

        {/* Texts */}
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

          {/* Dropdown Button */}
          <TouchableOpacity style={styles.tagButton} onPress={onTagPress}>
            <Text style={styles.tagText}>Tags</Text>
            <Text style={styles.chevron}>⌄</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PurchaseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: scaleWidth(16),
    padding: scaleWidth(16),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0, // stick to top
    right: 0, // stick to right
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    // borderTopRightRadius: scaleWidth(16),
    // borderBottomLeftRadius: scaleWidth(12),
    paddingHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(4),
  },
  badgeText: {
    color: 'white',
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // centers image with text
    marginTop: scaleHeight(12),
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(12),
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111',
    marginBottom: scaleHeight(4),
  },
  description: {
    fontSize: scaleWidth(14),
    color: '#666',
    marginBottom: scaleHeight(12),
    fontFamily: Fonts.ralewayRegular,
  },
  tagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: scaleWidth(12),
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(6),
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  tagText: {
    fontSize: scaleWidth(13),
    color: '#333',
    marginRight: scaleWidth(6),
    fontFamily: Fonts.ralewayRegular,
  },
  chevron: {
    fontSize: scaleWidth(14),
    color: '#333',
  },
});
