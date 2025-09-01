import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import Edittb from '../assets/images//Editbtn.svg';
import Calendar from '../assets/images/Calendar.svg';
import Svg from "../assets/images/svg.svg";

const RecentActivity: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Activity</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.linkText}>Family Wishlist</Text>
          <TouchableOpacity>
            <Edittb width={30} height={30} />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
          Birthday and holiday gift ideas for everyone
        </Text>

        {/* Created Date */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            marginBottom: scaleHeight(6),
          }}
        >
          <Calendar width={30} height={30} />
          <Text style={styles.dateText}>Created: May 15, 2025</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.avatarGroup}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/1.jpg',
              }}
              style={styles.avatar}
            />
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }}
              style={styles.avatar}
            />
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/3.jpg',
              }}
              style={styles.avatar}
            />
            <View style={styles.moreAvatar}>
              <Text style={styles.moreText}>+2</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.addButton}>
<Svg width={20} height={20}/>
            <Text style={styles.addButtonText}>Add Member</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecentActivity;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: scaleWidth(18),
    color: '#333',
    fontFamily: Fonts.ralewayBold,
    marginBottom: scaleHeight(10),
  },
  card: {
    backgroundColor: 'white',
    borderRadius: scaleWidth(16),
    padding: scaleWidth(14),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(6),
  },
  linkText: {
    fontSize: scaleWidth(16),
    color: 'black',
    textDecorationLine: 'underline',
    fontFamily: Fonts.ralewayMedium,
  },
  subtitle: {
    fontSize: scaleWidth(14),
    color: '#444',
    marginBottom: scaleHeight(10),
    fontFamily: Fonts.ralewayMedium,
  },
  dateText: {
    fontSize: scaleWidth(13),
    color: '#666',
    marginLeft: scaleWidth(6),
    fontFamily: Fonts.ralewayMedium,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleHeight(10),
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(16),
    marginRight: -scaleWidth(8),
    borderWidth: 2,
    borderColor: '#fff',
  },
  moreAvatar: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(16),
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scaleWidth(4),
  },
  moreText: {
    fontSize: scaleWidth(13),
    fontFamily: 'System',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF3FF',
    paddingVertical: scaleHeight(6),
    paddingHorizontal: scaleWidth(10),
    borderRadius: scaleWidth(8),
  },
  addButtonText: {
    color: '#2F80ED',
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayMedium,
    marginLeft: scaleWidth(4),
  },
});
