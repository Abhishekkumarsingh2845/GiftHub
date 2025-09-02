import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import GiftListSummaryCard from "../../Custom/GiftListSummaryCard";
import ToggleTabs from "../../Custom/ToggleTabs";
import GiftListItemCard from "../../Custom/GiftListItemCard";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";

// local SVG
import Avtar from "../../assets/images/listavtar.svg";
import { Fonts } from "../../utlis/Fonts";
import { colors } from "../../utlis/colors";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
import { useNavigation } from "@react-navigation/native";

const ExpenseManagerScreen = () => {
  const [activeTab, setActiveTab] = useState("Lists");

  // local contributors
  const contributors = [
    { id: "1", avatar: Avtar },
    { id: "2", avatar: Avtar },
    { id: "3", avatar: Avtar },
    { id: "4", avatar: Avtar },
    { id: "5", avatar: Avtar },
  ];
  const navigation=useNavigation()
const handleList=()=>{
    navigation.navigate('BirthdayGiftsScreen')

}
  return (
    <Wrapper>
      <View style={styles.container}>
        <Header title="Expense Manager" showBack />

        {/* Toggle */}
        <ToggleTabs activeTab={activeTab} onChange={setActiveTab} />

        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}
       
        showsVerticalScrollIndicator={false}>
          {activeTab === "Lists" ? (
            <>
              {/* Gift List Summary */}
              <GiftListSummaryCard
                title="Gift Lists Summary"
                totalExpenses={1245}
                totalBudget={1500}
                lastUpdated="Aug 6, 2025"
              />
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.sectionTitle}>Your Gift Lists</Text>
              <TouchableOpacity style={{backgroundColor:colors.primary,height:scaleHeight(30),width:scaleWidth(102),alignItems:'center',borderRadius:20}}> 
            <Text style={{fontFamily:Fonts.ralewaySemiBold,marginTop:6,
    color: "#fff",
   
    fontWeight: "600",
}}>+ New List</Text>
          </TouchableOpacity>
              </View>

               <GiftListItemCard
  variant="budget"
  title="Birthday Gifts"
  itemsCount="5 items"
  contributorsCount="3 contributors"
  leftTitle="Expenses"
  leftValue="$320.00"
  rightTitle="Budget"
  rightValue="$400.00"
  expenses={320}
  budget={400}
  contributors={contributors}
  splitText="Manage Split"
/>

              <GiftListItemCard
  variant="budget"
  title="Holiday Gifts"
  itemsCount="5 items"
  contributorsCount="3 contributors"
  leftTitle="Expenses"
  leftValue="$320.00"
  rightTitle="Budget"
  rightValue="$400.00"
  expenses={320}
  budget={400}
  contributors={contributors}
  splitText="Manage Split"
/>

            </>
          ) : (
            <>
              {/* Group List Summary */}
              <GiftListSummaryCard
                title="Group Lists Summary"
                totalExpenses={1245}
                totalBudget={1500}
                lastUpdated="Aug 6, 2025"
              />
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.sectionTitle}>Your GroupLists</Text>
              <TouchableOpacity style={{backgroundColor:colors.primary,height:scaleHeight(30),width:scaleWidth(102),alignItems:'center',borderRadius:20}} onPress={handleList}> 
            <Text style={{fontFamily:Fonts.ralewaySemiBold,marginTop:6,
    color: "#fff",
   
    fontWeight: "600",
}}>+ New List</Text>
          </TouchableOpacity>
              </View>

              
              <GiftListItemCard
  variant="budget"
  title="Family WishList"
  itemsCount="5 items"
  contributorsCount="3 contributors"
  leftTitle="Expenses"
  leftValue="$320.00"
  rightTitle="Budget"
  rightValue="$400.00"
  expenses={320}
  budget={400}
  contributors={contributors}
  splitText="Manage Split"
/>

              <GiftListItemCard
  variant="budget"
  title="Office Lunch"
  itemsCount="5 items"
  contributorsCount="3 contributors"
  leftTitle="Expenses"
  leftValue="$320.00"
  rightTitle="Budget"
  rightValue="$400.00"
  expenses={320}
  budget={400}
  contributors={contributors}
  splitText="Manage Split"
/>
            </>
          )}
        </ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 12,
    fontFamily:Fonts.ralewaySemiBold
  },
});

export default ExpenseManagerScreen;
