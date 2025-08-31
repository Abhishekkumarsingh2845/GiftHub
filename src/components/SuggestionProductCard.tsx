import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { scaleWidth, scaleHeight } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import P1 from '../assets/images/P1.svg'; // ✅ Product SVG
import AmazonLogo from '../assets/images/amzon.svg'; // ✅ Store Logo
import { colors } from '../utlis/colors';

interface SuggestionProductCardProps {
  title: string;
  description: string;
  price: string;
  onAddToList: () => void;
}

const SuggestionProductCard: React.FC<SuggestionProductCardProps> = ({
  title,
  description,
  price,
  onAddToList,
}) => {
  return (
    <View style={styles.card}>
      {/* Top Section */}
      <View style={styles.row}>
        <P1 width={scaleWidth(40)} height={scaleHeight(40)} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
           <View style={styles.rowBetween}>
        <Text style={styles.price}>{price}</Text>
        <AmazonLogo width={scaleWidth(55)} height={scaleHeight(20)} />
      </View>
           <TouchableOpacity style={styles.button} onPress={onAddToList}>
        <Text style={styles.buttonText}>Add to List</Text>
      </TouchableOpacity>
        </View>
      </View>

     
      <View style={styles.divider} />
    </View>
  );
};

export default SuggestionProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: scaleWidth(12),
    paddingVertical: scaleWidth(12),
    marginVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(12),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleHeight(10),
  },
  info: {
    flex: 1,
    marginHorizontal: scaleWidth(10),
  },
  title: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827',
  },
  description: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayRegular,
    color: '#6B7280',
    marginTop: scaleHeight(4),
  },
  price: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#111827',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: scaleWidth(25),
    paddingVertical: scaleHeight(10),
    alignItems: 'center',
    marginTop: scaleHeight(10),
    width: '50%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewaySemiBold,
  },
  divider: {
    height: 0.5,
    backgroundColor: '#E5E7EB',
    marginTop: scaleHeight(12),
  },
});
