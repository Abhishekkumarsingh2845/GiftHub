import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";


// Example SVG Import
import HeadphoneSvg from '../../assets/images/headphone.svg'
import Avtar from "../../assets/images/Avtar.svg";
import ProductCard from "../../Custom/ProductCard";
import PaymentOptionCard from "../../components/PaymentOptionCard";
import PurchaserCard from "../../components/Purchaseforpayment";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
import { Fonts } from "../../utlis/Fonts";
import Purchaseforpayment from "../../components/Purchaseforpayment";
import ProductCardForpayment from "../../components/ProductCardForpayment";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const AddSplitPaymentScreen: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState("split"); // "individual" or "split"
  const [contributors, setContributors] = useState([
    { id: 1, name: "Sarah", email: "sarah@email.com", price: "50.00" },
    { id: 2, name: "Mike Johnson", email: "Mikejohnson@email.com", price: "50.00" },
    { id: 3, name: "Emma Wilson", email: "Emmawilsonn@email.com", price: "50.00" },
  ]);
  const navigation =useNavigation()

  const handleRemove = (id: number) => {
    setContributors(contributors.filter((c) => c.id !== id));
  };
  const handleaddperson=()=>{
    navigation.navigate('AddPaymentScreen')
  }

  return (
    <Wrapper>
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Product Section */}
    <Header showBack title="'Add Split Payment"/>
      <ProductCardForpayment
        title="Wireless Noise- Cancelling Headphones"
        description="Immersive sound experience for music lovers."
        price="12.35"
         SvgIcon={HeadphoneSvg} 
      />

      {/* Payment Type Section */}
      <Text style={styles.sectionTitle}>Payment Type</Text>
      <PaymentOptionCard
        title="Pay the entire amount yourself"
        subtitle="Individual"
        selected={selectedPayment === "individual"}
        onPress={() => setSelectedPayment("individual")}
      />
      <PaymentOptionCard
        title="Share the cost with others"
        subtitle="Split Payment"
      
        onPress={() => setSelectedPayment("split")}
      />

      {/* Amount Input */}
      <Text style={styles.sectionTitle}>Amount</Text>
      <TextInput style={styles.input} placeholder="$150.00" value="$150.00" editable={false} />

      {/* Contributors Section */}
      <View style={styles.rowBetween}>
        <Text style={styles.sectionTitle}>Contributors</Text>
        <TouchableOpacity style={styles.addPersonBtn} onPress={handleaddperson}>
          <Text style={styles.addPersonText}>+Add Person</Text>
        </TouchableOpacity>
      </View>

      {/* Purchaser */}
      <Text style={styles.subHeader}>Purchaser</Text>
      <Purchaseforpayment
        name="Sarah"
        email="sarah@email.com"
        price="50.00"
        showPrice={true}
        avatar={<Avtar width={40} height={40} />}
        onRemove={() => handleRemove(1)}
      />

      {/* Other Contributors */}
      <Text style={styles.subHeader}>Other Contributors</Text>
      {contributors
        .filter((c) => c.id !== 1)
        .map((c) => (
          <PurchaserCard
            key={c.id}
            name={c.name}
            email={c.email}
            price={c.price}
            showPrice={true}
            avatar={<Avtar width={40} height={40} />}
            onRemove={() => handleRemove(c.id)}
          />
        ))}

      {/* Split Summary */}
      <Text style={styles.subHeader}>Split Summary</Text>
      <View style={styles.summaryBox}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Item Cost:</Text>
          <Text style={styles.summaryValue}>$150.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Number of Contributors:</Text>
          <Text style={styles.summaryValue}>3 Contributors</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Amount per Person:</Text>
          <Text style={styles.summaryValue}>$50.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Amount:</Text>
          <Text style={styles.summaryValue}>$0.00</Text>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveText}>Save Split Payment</Text>
      </TouchableOpacity>
    </ScrollView>
    </Wrapper>
  );
};

export default AddSplitPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: scaleWidth(16),
  },
  header: {
    fontSize: scaleWidth(18),
    fontFamily: Fonts.ralewayMedium,
    marginBottom: scaleHeight(12),
    color: "#111827",
  },
  sectionTitle: {
    fontSize: scaleWidth(15),
    fontFamily: Fonts.ralewayMedium,
    marginVertical: scaleHeight(10),
    color: "#111827",
  },
  subHeader: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayMedium,
    marginVertical: scaleHeight(8),
    color: "#374151",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    fontSize: 14,
    marginBottom: scaleHeight(15),
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scaleHeight(10),
  },
  addPersonBtn: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addPersonText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: Fonts.ralewayMedium,
  },
  summaryBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginTop: scaleHeight(6),
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  summaryLabel: {
    fontSize: 13,
    fontFamily: Fonts.ralewayRegular,
    color: "#6B7280",
  },
  summaryValue: {
    fontSize: 13,
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
  },
  saveBtn: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: Fonts.ralewayMedium,
  },
});
