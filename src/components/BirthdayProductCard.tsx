import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import P1 from '../assets/images/P1.svg'; // product image
import P2 from '../assets/images/amzon.svg'; // amazon logo
import Cut from '../assets/images/Cut.svg'; // close icon
import Share from '../assets/images/Share.svg'; // share icon
import DownArrow from '../assets/images/DownArrow.svg'; // create a small dropdown arrow svg
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

interface BirthdayProductCardProps {
  category: string;
  productName: string;
  addedBy: string;
  onShare?: () => void;
  onClose?: () => void;
}

const BirthdayProductCard: React.FC<BirthdayProductCardProps> = ({
  category,
  productName,
  addedBy,
  onShare,
  onClose,
}) => {
  return (
    <View style={styles.card}>
      {/* Top Row: Category + Icons */}
      <View style={styles.topRow}>
        {/* Dropdown-like Category */}
        <View style={styles.categoryBox}>
          <Text style={styles.category}>{category}</Text>
          <DownArrow width={14} height={14} />
        </View>

        <View style={styles.icons}>
          <TouchableOpacity onPress={onShare} style={{ marginRight: 12 }}>
            <Share width={18} height={18} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Cut width={18} height={18} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Divider line */}
      <View style={styles.divider} />

      {/* Product Row */}
      <View style={styles.productRow}>
        <P1 width={70} height={70} />
        <View style={{ flex: 1 }}>
          <Text style={styles.productName}>{productName}</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <P2 width={65} height={30} />
            </View>
            <View>
              <Text style={styles.addedBy}>Added by {addedBy}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BirthdayProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(12),
    margin: scaleWidth(10),
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: scaleWidth(6),
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: scaleWidth(6),
    paddingHorizontal: scaleWidth(8),
    paddingVertical: scaleHeight(4),
  },
  category: {
    fontSize: scaleWidth(14),
fontFamily:Fonts.ralewayMedium,
    marginRight: scaleWidth(6),
    color: '#333',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: scaleHeight(1),
    backgroundColor: '#eee',
    marginVertical: scaleHeight(10),
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productName: {
    fontSize: scaleWidth(16),
fontFamily:Fonts.ralewayMedium,
    color: '#000',
    marginBottom: scaleHeight(6),
  },
  addedBy: {
    fontSize: scaleWidth(12),
    color: '#666',
    marginTop: scaleHeight(6),
    fontFamily:Fonts.ralewayRegular,
  },
});
