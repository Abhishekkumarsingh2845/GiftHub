import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import Crowns from '../assets/images/Crown.svg';
import Ed from '../assets/images/Ed.svg';
// import { Ionicons, Entypo } from "@expo/vector-icons";

interface Member {
  id: string;
  name: string;
  role: 'Admin' | 'Member';
  image: string;
  isYou?: boolean;
}

const members: Member[] = [
  {
    id: '1',
    name: 'Alex (You)',
    role: 'Admin',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    isYou: true,
  },
  {
    id: '2',
    name: 'Alex Wilson',
    role: 'Member',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    role: 'Member',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

const MembersCard: React.FC = () => {
  const renderItem = ({ item }: { item: Member }) => (
    <View style={styles.memberRow}>
      {/* Avatar */}
      <Image source={{ uri: item.image }} style={styles.avatar} />

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
      </View>

      {/* Right action */}
      {item.role === 'Admin' ? (
        <Crowns width={30} height={30} />
      ) : (
        <TouchableOpacity style={styles.menuBtn}>
          <Ed width={40} height={40} />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Members ({members.length})</Text>

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Add Member */}
      <TouchableOpacity style={styles.addMember}>
        <Text style={styles.addText}>+ Add Member</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MembersCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
    marginVertical: scaleHeight(10),
  },
  heading: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayMedium,
    color: '#333',
    marginBottom: scaleHeight(12),
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleHeight(10),
  },
  avatar: {
    width: scaleWidth(44),
    height: scaleWidth(44),
    borderRadius: scaleWidth(8),
    marginRight: scaleWidth(12),
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: scaleWidth(15),
    fontFamily: Fonts.ralewayRegular,
    color: '#111',
  },
  role: {
    fontSize: scaleWidth(13),
    color: '#666',
    fontFamily: Fonts.ralewayRegular,
    marginTop: scaleHeight(2),
  },
  menuBtn: {
    padding: scaleWidth(6),
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: scaleWidth(56),
  },
  addMember: {
    marginTop: scaleHeight(12),
    alignItems: 'center',
    paddingVertical: scaleHeight(8),
  },
  addText: {
    fontSize: scaleWidth(15),
    color: '#2F80ED',
    fontFamily: 'System',
  },
});
