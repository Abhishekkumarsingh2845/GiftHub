import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView } from "react-native";
import ProductCard from "../../Custom/ProductCard";
import PaymentOptionCard from "../../components/PaymentOptionCard";

import PrimaryButton from "../../components/PrimaryButton";
import ProductCardForpayment from "../../components/ProductCardForpayment";
import Purchaseforpayment from "../../components/Purchaseforpayment";
import HeadphoneSvg from '../../assets/images/headphone.svg'
import Header from "../../components/Header";
import Avtar from '../../assets/images/Avtar.svg'
import { Fonts } from "../../utlis/Fonts";
import Wrapper from "../../components/Wrapper";
import Calender from '../../assets/images/CalenderIcon.svg'
import UploadImage from '../../assets/images/FileArrowUp.svg'

const AddPaymentScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState("individual");
  const [amount, setAmount] = useState("150.00");
  const [notes, setNotes] = useState("");


  return (
    <Wrapper>
   <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
   <Header title=" Add Payment" showBack/>

      {/* Product Card */}
      <ProductCardForpayment
        title="Wireless Noise- Cancelling Headphones"
        description="Immersive sound experience for music lovers."
        price="12.35"
         SvgIcon={HeadphoneSvg} 
      />

      {/* Payment Type */}
      <Text style={styles.sectionTitle}>Payment Type</Text>
      <PaymentOptionCard
        title="Pay the entire amount yourself"
        subtitle="Individual"
        value="individual"
        selectedValue={selectedPayment}
        onSelect={(val) => setSelectedPayment(val)}
      />
      <PaymentOptionCard
        title="Share the cost with others"
        subtitle="Split Payment"
        value="split"
        selectedValue={selectedPayment}
        onSelect={(val) => setSelectedPayment(val)}
      />

      {/* Amount */}
      <Text style={styles. sectionAmountTitle}>Amount</Text>
      <TextInput
        style={styles.input}
        value={`$${amount}`}
      
        onChangeText={(text) => setAmount(text)}
      />

<View style={styles.purchaserBox}>
  <Text style={styles.sectionTitle}>Purchaser</Text>
  <Purchaseforpayment
    name="sarah"
    email="sarah@email.com"
    avatar={<Avtar />}
  />
</View>



      {/* Purchase Date */}
      <Text style={styles.sectionAmountTitle}>Purchase Date</Text>
      <View style={styles.dateInput}>
        <Text style={{ color: "#111827",fontFamily:Fonts.ralewayMedium }}>August 6, 2025</Text>
        <Calender/>
      
      </View>

      {/* Notes */}
      <Text style={styles.sectionAmountTitle}>Notes (Optional)</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Add any additional notes..."
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      {/* Receipt */}
      <Text style={styles.sectionAmountTitle}>Receipt (Optional)</Text>
      <TouchableOpacity style={styles.uploadBox}>
        <UploadImage/>
        <Text style={{ color: "#6B7280" }}>Tap to upload image</Text>
        <Text style={{ color: "#9CA3AF", fontSize: 12 }}>JPG, PNG up to 5MB</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <PrimaryButton title="Save Payment" onPress={() => {}} />
        </ScrollView>
   </Wrapper>
  );
};

export default AddPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111827",
  },
  sectionTitle: {
    fontSize: 16,

    marginVertical: 10,
    color: "#111827",
    fontFamily:Fonts.ralewaySemiBold
  },
    sectionAmountTitle: {
    fontSize: 16,

    marginVertical: 10,
    color: "#6C7278",
    fontFamily:Fonts.ralewaySemiBold
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 16,
   fontSize: 16,
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
    textAlign: "left",  
    
  },
  dateInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 20,
    borderStyle: "dashed",
    height:140
  },

purchaserBox: {
  backgroundColor: "#FCFCFD",
  borderRadius: 12,
  padding: 12,
  marginBottom: 16,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 2, // Android ke liye
},






});
