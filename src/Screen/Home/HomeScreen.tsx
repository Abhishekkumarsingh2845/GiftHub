import React from "react";
import { View, Text, ScrollView, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import SearchBox from "../../Custom/SearchBox";
import UpdateCard from "../../Custom/UpdateCard";
import ListCard from "../../Custom/ListCard";
import ProductCard from "../../Custom/ProductCard";
import Avtar from "../../assets/images/Avtar.svg";
import MagnifyingGlass from '../../assets/images/MagnifyingGlass.svg'
import Wrapper from "../../components/Wrapper";
import Notification from "../../assets/images/notificationbtn.svg"
import GiftImg from '../../assets/images/giftimage.svg'
import ShareIcon from '../../assets/images/sharebtn.svg'
import { Images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utlis/colors";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
const HomeScreen: React.FC = () => {
    const navigation=useNavigation()
    const handleAdd=()=>{
        navigation.navigate('SearchScreen')

    }
  return (
    <Wrapper backgroundImage={Images.backgroudShadow}>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header 
         avatar={<Avtar width={40} height={40} />} 
          name="Zain Dokins" 
  showBell={true}
  bellIcon={<Notification width={40} height={40}/>}/>

        {/* Search */}
        <SearchBox placeholder="Search Gifts" 
        icon={<MagnifyingGlass width={20} height={20}/>}/>

        {/* Updates */}
        <Text style={styles.section}>Updates</Text>
        <UpdateCard
       svgIcon={<GiftImg width={60} height={80}/>}
          text="Ayesha added 3 items to Rohan's birthday list"
          time="2 hours ago"
        />
        <UpdateCard
          svgIcon={<GiftImg width={60} height={80}/>}
          text="You've been added to 'Baby Shower' group"
          time="5 hours ago"
        />

         <UpdateCard
          svgIcon={<GiftImg width={60} height={80}/>}
          text="You've been added to 'Baby Shower' group"
          time="5 hours ago"
        />

        {/* Lists */}
        <View style={styles.listHeader}>
          <Text style={styles.section}>Your Lists</Text>
          <TouchableOpacity style={{backgroundColor:colors.primary,height:scaleHeight(30),width:scaleWidth(102),alignItems:'center',borderRadius:20}}> 
            <Text style={styles.newList}>+ New List</Text>
          </TouchableOpacity>

        </View>
        <ListCard title="Wedding Registry" items={12} shared 
        rightIcon={<ShareIcon width={40} height={25}/>}/>
        <ListCard title="Baby Shower Wishlist" items={8} shared 
         rightIcon={<ShareIcon width={40} height={25}/>}/>

        {/* Recommended Products */}
        <Text style={styles.section}>Recommended Products</Text>
        <View style={styles.row}>
          <ProductCard
            image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
            title="Sony WH-1000XM4"
            price="12.35"
            oldPrice="15.00"
            discount={20}
          />
          <ProductCard
            image="https://m.media-amazon.com/images/I/71rhrO49SmL._AC_SL1500_.jpg"
            title="Apple Watch Series 9"
            price="12.35"
            oldPrice="15.00"
            discount={20}
            onAdd={handleAdd}
          />
        </View>
      </ScrollView>
    </View>
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },
  section: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  newList: {

marginTop:6,
    color: "#fff",
   
    fontWeight: "600",

   
    
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
