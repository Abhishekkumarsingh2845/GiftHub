import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import ProgressBar from "../../Custom/ProgressBar";
import GiftListItemCard from "../../Custom/GiftListItemCard"; 
import ShareIcon from'../../assets/images/sharebtn.svg'
import Edit from '../../assets/images/edit.svg'

import { Fonts } from "../../utlis/Fonts";
import Avtar from "../../assets/images/listavtar.svg";
import { colors } from "../../utlis/colors";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
import { useNavigation } from "@react-navigation/native";

const BirthdayGiftsScreen = () => {
  const contributors = [
    { id: "1", avatar: Avtar, name: "Alex Morgan", role: "Organizer", amount: 160, share: "50%" },
    { id: "2", avatar: Avtar, name: "Jamie Smith", role: "Contributor", amount: 96, share: "30%" },
    { id: "3", avatar: Avtar, name: "Taylor Reed", role: "Contributor", amount: 64, share: "20%" },
  ];
  const navigation=useNavigation()
  const hadleAdd=()=>{
    navigation.navigate('FamilyWishlist')

  }

  const items = [
    {
      id: "1",
      title: "Wireless Headphones",
      subtitle: "Sony WH-1000XM5",
      price: 120,
      status: "Purchased",
      contributors,
    },
    {
      id: "2",
      title: "Smart Watch",
      subtitle: "Apple Watch Series 8",
      price: 120,
      status: "Purchased",
      contributors,
    },
  ];

  return (
    <Wrapper>
      <View style={styles.container}>
        <Header title="Birthday Gifts" showBack showShare
        shareIcon={<ShareIcon/>} />

        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}
         showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
          {/* Budget Overview */}
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.cardTitle}>Budget Overview</Text>
              <TouchableOpacity>
         <Edit/>
              </TouchableOpacity>
            </View>

            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.label}>Current Expenses</Text>
                <Text style={styles.value}>$1,245.00</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.label}>Budget Limit</Text>
                <Text style={styles.value}>$1,500.00</Text>
              </View>
            </View>

            <ProgressBar progress={(1245 / 1500) * 100} />
            <Text style={styles.remaining}>$80.00 remaining</Text>

            <Text style={styles.footerText}>
              Last updated: Aug 6, 2025 · 5 items · 3 contributors
            </Text>
          </View>

          {/* Contributors */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Contributors</Text>
            <TouchableOpacity style={styles.addBtn} onPress={hadleAdd}>
              <Text style={styles.addText}>+ Add</Text>
            </TouchableOpacity>
          </View>

          {contributors.map((c) => (
            <View key={c.id} style={styles.contributorCard}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <c.avatar width={36} height={36} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.name}>{c.name}</Text>
                  <Text style={styles.role}>{c.role}</Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.amount}>${c.amount.toFixed(2)}</Text>
                <Text style={styles.role}>{c.share}</Text>
              </View>
            </View>
          ))}

          {/* Gift Items */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Gift Items</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>+ Add Item</Text>
            </TouchableOpacity>
          </View>

          {items.map((item) => (
            <GiftListItemCard
             variant="gift"
  title="Wireless Headphones"
  subtitle="Sony WH-1000XM5"
  leftValue="$120.00"
  rightValue="Purchased"
  contributors={contributors}
  splitText="Payment Split"
  showTags={true}
  showMenu={false}
  showDelete={true}
            />
          ))}
        </ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", marginVertical: 6 },
  cardTitle: { fontSize: 16, fontFamily: Fonts.ralewayMedium },
  label: { fontSize: 12, fontFamily: Fonts.ralewayRegular, color: "#666" },
  value: { fontSize: 14, fontFamily: Fonts.ralewaySemiBold },
  remaining: { fontSize: 12, color: "#2A66FF", marginTop: 6, fontFamily: Fonts.ralewayMedium },
  footerText: { fontSize: 12, color: "#888", marginTop: 4, fontFamily: Fonts.ralewayRegular },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  sectionTitle: { fontSize: 16, fontFamily: Fonts.ralewaySemiBold },
  addBtn: {
    backgroundColor: colors.primary,

    paddingHorizontal: 12,
    paddingVertical: 6,
     height:scaleHeight(30),width:scaleWidth(100),
     borderRadius:20
  },
  addText: { color: "#fff", fontFamily: Fonts.ralewaySemiBold,textAlign:'center' ,fontSize:14},
  contributorCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
   
  },
  name: { fontSize: 14, fontFamily: Fonts.ralewayMedium },
  role: { fontSize: 12, fontFamily: Fonts.ralewayRegular, color: "#666" },
  amount: { fontSize: 14, fontFamily: Fonts.ralewaySemiBold },
});

export default BirthdayGiftsScreen;
