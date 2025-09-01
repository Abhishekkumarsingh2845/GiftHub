import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import PurchaseCard from "../../components/PurchaseCard";
import FormInput from "../../components/FormInput";
import SaveButton from "../../components/SaveButton";
import ContributionCard from "../../components/ContributionCard";
import PaymentContributors from "../../components/PaymentContributors";

interface FullPurchaseProps {
  title?: string;
}

const FullPurchase: React.FC<FullPurchaseProps> = ({ title = "Full Purchase" }) => {
  return (
   <Wrapper>
    <Header title="Update Purchase"/>
    <PurchaseCard title={"Wireless Noise- Cancelling Headphones"} description={"Immersive sound experience for music lovers."}/>
    <FormInput label="Enter Price" placeholder="$200"/>
    <PaymentContributors/>
    <ContributionCard
  contributions={[
    { name: "John", amount: "$100.00", percentage: "50%" },
    { name: "Sarah", amount: "$100.00", percentage: "50%" },
  ]}
/>

    <SaveButton/>
   </Wrapper>
  );
};

export default FullPurchase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", // light background
  },
  header: {
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: scaleWidth(18),
    fontWeight: "600",
    color: "#111",
  },
  content: {
    flex: 1,
    padding: scaleWidth(16),
  },
  text: {
    fontSize: scaleWidth(14),
    color: "#333",
  },
});
