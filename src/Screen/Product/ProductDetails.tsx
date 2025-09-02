import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import ListCard from "../../Custom/ListCard";
import GiftIcon from '../../assets/images/GiftIcon.svg'
import Header from "../../components/Header";
import Star from '../../assets/images/Star.svg'
import PrimaryButton from "../../components/PrimaryButton";
import Headphone from '../../assets/images/headphone.svg'
import Wrapper from "../../components/Wrapper";
import { Images } from "../../assets/images";
import Shareicon from '../../assets/images/sharebtn.svg'
import { Fonts } from "../../utlis/Fonts";
import { useNavigation } from "@react-navigation/native";



export default function ProductDetails() {
    const navigation =useNavigation()
    const handleadd=()=>{
        navigation.navigate('ExpenseManagerScreen')

    }
    
  return (
    <Wrapper backgroundImage={Images.backgroudShadow}>
    <View style={styles.container}>
      {/* Header */}
      <Header title="Product Details" showBack  showShare shareIcon= {<Shareicon width={20}/>} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Product Image */}
        <View style={styles.imageBox}>
          <Headphone  height={200} width={200} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Apple AirPods Pro (2nd Generation)</Text>

        {/* Price */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>$12.35</Text>
          <Text style={styles.oldPrice}>$18.35</Text>
        </View>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <Star width={18} height={18} fill="#2563eb" />
          <Star width={18} height={18} fill="#2563eb" />
          <Star width={18} height={18} fill="#2563eb" />
          <Star width={18} height={18} fill="#2563eb" />
          <Star width={18} height={18} fill="#d1d5db" />
          <Text style={styles.ratingText}>4.3 (2,847 reviews)</Text>
        </View>

        {/* Description */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Description</Text>
          <Text style={styles.cardText}>
            Active Noise Cancellation, Transparency mode, 
            Spatial audio with dynamic head tracking, Adaptive EQ. Up to 6 hours of listening time
            with ANC enabled.
          </Text>
        </View>

        {/* Key Features */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Key Features</Text>
          <Text style={styles.cardText}>✓ Active Noise Cancellation</Text>
          <Text style={styles.cardText}>✓ Wireless Charging Case</Text>
          <Text style={styles.cardText}>✓ Sweat & Water Resistant</Text>
          <Text style={styles.cardText}>✓ Up to 30 Hours Battery Life</Text>
        </View>

        {/* Lists */}
        <Text style={styles.sectionTitle}>Lists</Text>
        <ListCard
          icon={<GiftIcon width={20} height={20} />}
          title="Birthday"
          rightText="Add"
        
      
        />
        <ListCard
          icon={<GiftIcon width={20} height={20} />}
          title="Wedding"
          rightText="Add"
          
 

        />
      </ScrollView>

      {/* Footer Button */}
      
        <PrimaryButton
          title="Buy on Amazon"
          onPress={handleadd}
       
        />
   
    </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  imageBox: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  image: { width: 200, height: 200 },
  title: { fontSize: 16,  bottom:16,fontWeight: "600", marginHorizontal: 16, marginTop: 8, fontFamily:Fonts.ralewaySemiBold },
  priceRow: { flexDirection: "row", alignItems: "center", marginHorizontal: 16 },
  price: { fontSize: 16, fontWeight: "700", color: "#2563eb",fontFamily:Fonts.ralewaySemiBold },
  oldPrice: {
    fontSize: 14,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  ratingText: { marginLeft: 6, color: "#4B5563",fontFamily:Fonts.ralewaySemiBold },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
  },
  cardTitle: { fontWeight: "600", fontSize: 14, marginBottom: 4 },
  cardText: { color: "#374151", fontSize: 13, marginVertical: 2 ,fontFamily:Fonts.ralewayRegular},
  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 12,
    fontWeight: "600",
    fontSize: 14,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
  },
  buyButton: {
    backgroundColor: "#2563eb",
    borderRadius: 12,
    paddingVertical: 14,
  },
});
