import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";



// 🖼️ Partner Logos (svg/png import karo)
import AmazonIcon from '../../assets/images/amazon.svg'
import FlipkartIcon from '../../assets/images/Flipkart.svg'
import SnapdealIcon from '../../assets/images/snapdeal.svg'
import ProductCard from "../../Custom/ProductCard";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Headphone from '../../assets/images/headphone.svg'
import { Images } from "../../assets/images";
import Chip from "../../components/Chip";
import SearchBox from "../../Custom/SearchBox";
import MaginifyingGlass from'../../assets/images/MagnifyingGlass.svg'
import { useNavigation } from "@react-navigation/native";
import { Fonts } from "../../utlis/Fonts";

const SearchResults = () => {
    const navigation=useNavigation()
    const handleAddlist=()=>{
        navigation.navigate('ErrorScreen')

    }
  const products = [
    {
      id: 1,
      title: "Sony WH-1000XM4",
     image: <Headphone width={120} height={120} />,
      price: "12.35",
      oldPrice: "13.35",
      discount: 20,
      partnerName: "Amazon",
      partnerIcon: <AmazonIcon width={30} height={30} />,
    },
    {
      id: 2,
      title: "Apple Watch Series 9",
     image: <Headphone width={120} height={120} />,      price: "12.35",
      oldPrice: "13.35",
      discount: 20,
      partnerName: "Amazon",
     partnerIcon: <AmazonIcon width={30} height={30} />,
    },
    {
      id: 3,
      title: "Sony WH-1000XM4",
     image: <Headphone width={120} height={120} />,    price: "12.35",
      oldPrice: "13.35",
      discount: 20,
      partnerName: "Flipkart",
      partnerIcon: <FlipkartIcon width={30} height={30} />,
    },
    {
      id: 4,
      title: "Apple Watch Series 9",
     image: <Headphone width={120} height={120} />,     price: "12.35",
      oldPrice: "13.35",
      discount: 20,
      partnerName: "Flipkart",
      partnerIcon: <FlipkartIcon width={30} height={30} />,
    },
    {
      id: 5,
      title: "Sony WH-1000XM4",
     image: <Headphone width={120} height={120} />,    price: "12.35",
      oldPrice: "13.35",
      discount: 20,
      partnerName: "Snapdeal",
      partnerIcon: <SnapdealIcon width={30} height={30} />,
    },
    {
      id: 6,
      title: "Apple Watch Series 9",
     image: <Headphone width={120} height={120} />,     price: "12.35",
      oldPrice: "13.35",
      discount: 20,
      partnerName: "Snapdeal",
      partnerIcon: <SnapdealIcon width={30} height={30} />,
    },
  ];

  return (
    <Wrapper backgroundImage={Images.backgroudShadow}>
    <ScrollView style={styles.container}
 showsVerticalScrollIndicator={false}   // vertical indicator hide
  showsHorizontalScrollIndicator={false} >
      {/* Header */}
      <View style={styles.header}>
        <Header showBack={true} title="Searh Results"/>
      </View>

      {/* Filter Tabs */}
      <View style={styles.tabsRow}>
        <Chip label="Amazon" style={styles.chip} />
        <Chip label="Walmart" style={styles.chip}  />
        <Chip label="Best Buy" style={styles.chip} textStyle={{textAlign:"center",fontFamily:Fonts.ralewayRegular}}  />
      </View>

      {/* Search Bar */}
      <SearchBox placeholder="Search Gift" icon={<MaginifyingGlass width={20}/>}/>

      {/* Results Header */}
      <View style={styles.resultsRow}>
        <Text style={styles.resultsText}>247 results found</Text>
        <TouchableOpacity style={styles.sortBtn}>
          <Text style={styles.sortText}>Sort by</Text>
        
        </TouchableOpacity>
      </View>

      {/* Products Grid */}
      <View style={styles.grid}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
              image={item.image}
            onAdd={handleAddlist}
            onViewPartner={() => console.log("View on", item.partnerName)}
            
          />
        ))}
      </View>
    </ScrollView>
    </Wrapper>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  chip: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 10,
    marginBottom: 10,
    width:'33%'
    
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  tabsRow: {
    flexDirection: "row",
    marginBottom: 12,
   
  },
  tab: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  tabText: {
    fontSize: 13,
    color: "#111827",
    fontWeight: "500",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
  resultsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  resultsText: {
    fontSize: 13,
    color: "#374151",
  },
  sortBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  sortText: {
    fontSize: 12,
    color: "#111827",
    marginRight: 4,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
