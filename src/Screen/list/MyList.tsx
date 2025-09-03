import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Wrapper from "../../components/Wrapper";
import { colors } from "../../utlis/colors";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
import ListItemCard from "../../components/ListItemCard";
import Header from "../../components/Header";

// Import your screens
import AISuggestion from "../suggest/AISuggestion";
import { Fonts } from "../../utlis/Fonts";
import ShareICon from '../../assets/images/sharebtn.svg'
import Edit from '../../assets/images/Editbtn.svg'
const MyList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"list" | "ai">("list");

  return (
    <Wrapper>
      <View style={styles.container}>
        {/* Header */}
        <Header title="My Lists" />

        {/* Toggle buttons */}
       // MyList.tsx

<View style={styles.btnRow}>
  <TouchableOpacity
    style={[
      styles.tabBtn,
      activeTab === "ai" && styles.activeBtn,
    ]}
    onPress={() => setActiveTab("ai")}
  >
    <Text
      style={[
        styles.tabText,
        activeTab === "ai" && styles.activeText,
      ]}
    >
      AI suggestions
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.tabBtn,
      activeTab === "list" && styles.activeBtn,
    ]}
    onPress={() => setActiveTab("list")}
  >
    <Text
      style={[
        styles.tabText,
        activeTab === "list" && styles.activeText,
      ]}
    >
      + New List
    </Text>
  </TouchableOpacity>
</View>

        {/* Conditional render */}
        {activeTab === "list" ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListItemCard
              title="Birthday Wishlist 2025"
              items={12}
              members={10}
              totalExpense="200"
              visibility="Public"
              shareIcon={<ShareICon/>}
              editIcon={<Edit/>}
            />
            <ListItemCard
              title="Wedding Registry"
              items={12}
              members={10}
              totalExpense="2800"
              visibility="Public"
              shareIcon={<ShareICon/>}
              editIcon={<Edit/>}
            />
            <ListItemCard
              title="Holiday Gifts 2025"
              items={12}
              members={10}
              totalExpense="200"
              visibility="Public"
              shareIcon={<ShareICon/>}
              editIcon={<Edit/>}
            />

            <ListItemCard
              title="Holiday Gifts 2025"
              items={12}
              members={10}
              totalExpense="200"
              visibility="Public"
              shareIcon={<ShareICon/>}
              editIcon={<Edit/>}
            />
            <ListItemCard
              title="Holiday Gifts 2025"
              items={12}
              members={10}
              totalExpense="200"
              visibility="Public"
              shareIcon={<ShareICon/>}
              editIcon={<Edit/>}
            />
            <ListItemCard
              title="Holiday Gifts 2025"
              items={12}
              members={10}
              totalExpense="200"
              visibility="Public"
              shareIcon={<ShareICon/>}
              editIcon={<Edit/>}
            />
          </ScrollView>
        ) : (
          <AISuggestion />
        )}
      </View>
    </Wrapper>
  );
};

export default MyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleWidth(16),
  },
btnRow: {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: scaleHeight(16),
},

tabBtn: {
  flex: 1, // equal width
  backgroundColor: "#F3F4F6",
  paddingVertical: scaleHeight(12),
  borderRadius: 25,
  marginHorizontal: 5,
  alignItems: "center",
},

tabText: {
  fontSize: 16,
  color: "#374151",
fontFamily:Fonts.ralewayMedium
},

activeBtn: {
  backgroundColor: colors.primary,
},

activeText: {
  color: "#fff",
  fontWeight: "600",
},

});
