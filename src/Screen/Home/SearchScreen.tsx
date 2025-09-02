import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


// 🖼️ Icons paas karenge props ke through
import ClockIcon from '../../assets/images/clock.svg'
import CloseIcon from '../../assets/images/Cross.svg'
import AmazonIcon from '../../assets/images/amazon.svg'
import FlipkartIcon from '../../assets/images/Flipkart.svg'
import SnapdealIcon from '../../assets/images/snapdeal.svg'
import SearchBox from "../../Custom/SearchBox";
import Chip from "../../components/Chip";
import RecentSearchItem from "../../components/RecentSearchItem";
import PartnerCard from "../../components/PartnerCard";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { Images } from "../../assets/images";
import MagnifyingGlass from '../../assets/images/MagnifyingGlass.svg'
import { Fonts } from "../../utlis/Fonts";
import { useNavigation } from "@react-navigation/native";
const SearchScreen: React.FC = () => {
    const navigation=useNavigation()
    const handleSearch=()=>{
        navigation.navigate('SearchResults')

    }
   
  return (
    <Wrapper backgroundImage={Images.backgroudShadow}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
<Header showBack={true}
title="Search For Gifts"/>

      {/* Search Input */}
      <SearchBox placeholder="Paste link or search with keyword"
      icon={<MagnifyingGlass width={20}/>}
/>

      {/* Category Chips */}
      <View style={styles.chipRow}>
        <Chip label="Electronics" />
        <Chip label="Fashion" />
        <Chip label="Home & Garden" />
      </View>

      {/* Recent Searches */}
      <Text style={styles.section}>Recent Searches</Text>
      <RecentSearchItem text="wireless headphones" ClockIcon={ClockIcon} CloseIcon={CloseIcon} />
      <RecentSearchItem text="coffee maker" ClockIcon={ClockIcon} CloseIcon={CloseIcon} />
      <RecentSearchItem text="birthday gift ideas" ClockIcon={ClockIcon} CloseIcon={CloseIcon} />

      {/* Partner Logos */}
      <Text style={styles.section}>Search Across Partners</Text>
      <View style={styles.partnerRow}>
        <PartnerCard Icon={AmazonIcon} name="Amazon"  onPress={handleSearch}/>
        <PartnerCard Icon={FlipkartIcon} name="Flipkart" />
        <PartnerCard Icon={SnapdealIcon} name="Snapdeal" />
      </View>
    </ScrollView>
    </Wrapper>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 12,
    fontFamily:Fonts.ralewayMedium
  },
  partnerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
