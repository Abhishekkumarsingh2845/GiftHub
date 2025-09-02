import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import ProductCard from "../../Custom/ProductCard";
import PaymentOptionCard from "../../components/PaymentOptionCard";

import PrimaryButton from "../../components/PrimaryButton";
import ProductCardForpayment from "../../components/ProductCardForpayment";
import Purchaseforpayment from "../../components/Purchaseforpayment";
import HeadphoneSvg from '../../assets/images/headphone.svg'
import Header from "../../components/Header";


const AddPaymentScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState("individual");
  const [amount, setAmount] = useState("150.00");
  const [notes, setNotes] = useState("");


  return (
    <View style={styles.container}>
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
      <Text style={styles.sectionTitle}>Amount</Text>
      <TextInput
        style={styles.input}
        value={`$${amount}`}
        onChangeText={(text) => setAmount(text)}
      />

      {/* Purchaser */}
      <Text style={styles.sectionTitle}>Purchaser</Text>
      <Purchaseforpayment
        name="sarah"
        email="sarah@email.com"
      
      />

      {/* Purchase Date */}
      <Text style={styles.sectionTitle}>Purchase Date</Text>
      <View style={styles.dateInput}>
        <Text style={{ color: "#111827" }}>August 6, 2025</Text>
      
      </View>

      {/* Notes */}
      <Text style={styles.sectionTitle}>Notes (Optional)</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Add any additional notes..."
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      {/* Receipt */}
      <Text style={styles.sectionTitle}>Receipt (Optional)</Text>
      <TouchableOpacity style={styles.uploadBox}>
        <Text style={{ color: "#6B7280" }}>Tap to upload image</Text>
        <Text style={{ color: "#9CA3AF", fontSize: 12 }}>JPG, PNG up to 5MB</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <PrimaryButton title="Save Payment" onPress={() => {}} />
    </View>
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
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 10,
    color: "#111827",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 16,
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
  },
});
