import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import LongFormInput from '../../components/LongFormInput';
import PrimaryButton from '../../components/PrimaryButton';
import ImageUploadBox from '../../components/ImageUploadBox';
import SearchBar from '../../components/SearchBar';
import SuggestionProductCard from '../../components/SuggestionProductCard';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';
import { colors } from '../../utlis/colors';

const AddItems: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manual' | 'search'>('manual');

  return (
    <Wrapper>
      <Header title="Add Items" />

      {/* Segmented Tab */}
      <View style={styles.tabWrapper}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'manual' && styles.activeTab]}
            onPress={() => setActiveTab('manual')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'manual' && styles.activeTabText,
              ]}
            >
              Manual Entry
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'search' && styles.activeTab]}
            onPress={() => setActiveTab('search')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'search' && styles.activeTabText,
              ]}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conditional Rendering */}
      {activeTab === 'manual' ? (
        <>
          <FormInput label="Name of Item" placeholder="Name of Item" />
          <FormInput
            label="Product Link (Optional)"
            placeholder="https://example.com/product"
          />
          <ImageUploadBox />
          <LongFormInput
            label="Notes (Optional)"
            placeholder="Add any additional notes..."
          />
          <PrimaryButton title="+ Add to List" />
        </>
      ) : (
        <>
          {/* For Search Tab */}
          <SearchBar />
          <View
            style={{
              backgroundColor: '#FFFFFF',
              paddingVertical: scaleWidth(16),
              marginTop: scaleHeight(5),
              borderWidth: 0.5,
              borderColor: '#FFFFFF',
              borderRadius: 20,
            }}
          >
            <SuggestionProductCard
              title="Wireless Noise-Cancelling Headphones"
              description="Immersive sound experience for music lovers."
              price="$12.35"
              onAddToList={() => console.log('Added to list!')}
            />
            <SuggestionProductCard
              title="Wireless Noise-Cancelling Headphones"
              description="Immersive sound experience for music lovers."
              price="$12.35"
              onAddToList={() => console.log('Added to list!')}
            />
            <SuggestionProductCard
              title="Wireless Noise-Cancelling Headphones"
              description="Immersive sound experience for music lovers."
              price="$12.35"
              onAddToList={() => console.log('Added to list!')}
            />
          </View>
          <PrimaryButton title="Add to <User list> list" />
          {/* Later: you can show FlatList of results here */}
        </>
      )}
    </Wrapper>
  );
};

export default AddItems;
const styles = StyleSheet.create({
  tabWrapper: {
    marginTop: scaleHeight(12),
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: scaleWidth(65), // pill shape
    paddingHorizontal: scaleWidth(5),
    borderWidth: 0.6, // keep thin (can leave unscaled)
    borderColor: 'white',
    width: '100%',
    paddingVertical: scaleHeight(5),
  },
  tab: {
    flex: 1,
    paddingVertical: scaleHeight(12),
    alignItems: 'center',
    borderRadius: scaleWidth(30), // keeps button round inside
    borderWidth: 0.6, // keep thin
    borderColor: 'white',
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: scaleWidth(14),
    fontWeight: '500',
    color: '#374151',
  },
  activeTabText: {
    color: '#fff',
  },
});

