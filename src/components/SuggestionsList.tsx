import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';

const suggestionsData = [
  {
    id: '1',
    name: 'James Smith',
    email: 'james.s@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.g@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'David Johnson',
    email: 'david.j@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const SuggestionItem = ({
  item,
  selected,
  onToggle,
}: {
  item: (typeof suggestionsData)[0];
  selected: boolean;
  onToggle: () => void;
}) => (
  <TouchableOpacity style={styles.item} onPress={onToggle}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />

    <View style={{ flex: 1, marginLeft: 12 }}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>

    {/* Custom Checkbox */}
    <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
      {selected && <Text style={styles.checkmark}>✓</Text>}
    </View>
  </TouchableOpacity>
);

const SuggestionsList: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['1']); // Default selected James

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Suggestions</Text>

      {/* Card */}
      <View style={styles.card}>
        <FlatList
          data={suggestionsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SuggestionItem
              item={item}
              selected={selectedIds.includes(item.id)}
              onToggle={() => toggleSelect(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default SuggestionsList;
const styles = StyleSheet.create({
  container: {
    // padding: scaleWidth(16),
  },
  heading: {
    fontSize: scaleWidth(18),
    fontFamily: Fonts.ralewaySemiBold,
    color: '#6C7278',
    marginBottom: scaleHeight(12),
  },
  card: {
    backgroundColor: 'white',
    borderRadius: scaleWidth(16),
    padding: scaleWidth(12),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleHeight(12),
  },
  avatar: {
    width: scaleWidth(50),
    height: scaleHeight(50),
    borderRadius: scaleWidth(8),
  },
  name: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayRegular,
    color: '#0C1523',
  },
  email: {
    fontSize: scaleWidth(13),
      fontFamily: Fonts.ralewayRegular,
    color: '#667085',
    marginTop: scaleHeight(2),
  },
  checkbox: {
    width: scaleWidth(24),
    height: scaleHeight(24),
    borderRadius: scaleWidth(6),
    borderWidth: 1.5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#2F80ED',
    borderColor: '#2F80ED',
  },
  checkmark: {
    color: 'white',
    fontSize: scaleWidth(14),
    fontWeight: 'bold',
  },
  separator: {
    height: scaleHeight(1),
    backgroundColor: '#eee',
    marginLeft: scaleWidth(56), // align divider under text (not under avatar)
  },
});
