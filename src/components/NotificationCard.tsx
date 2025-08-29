import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { img } from '../utlis/cimg';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

interface NotificationCardProps {
  name: string;
  action: string;
  time: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  name,
  action,
  time,
}) => {
  return (
    <View style={styles.container}>
      {/* Static local image */}
      <Image source={img.sample_1} style={styles.avatar} />

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.message}>
          <Text style={styles.name}>{name}</Text> {action}
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(10),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    width: scaleWidth(65),
    height: scaleWidth(65),
    borderRadius: scaleWidth(12),
    marginRight: scaleWidth(12),
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: scaleHeight(16),
    color: '#374151',
  },
  name: {
    fontFamily: Fonts.ralewayBold,
    color: '#111827',
  },
  time: {
    marginTop: scaleHeight(4),
    fontSize: scaleHeight(13),
    color: '#9CA3AF',
    fontFamily: Fonts.ralewayRegular,
  },
});

export default NotificationCard;
