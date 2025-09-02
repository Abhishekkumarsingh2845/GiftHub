// GiftListSummaryCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "./ProgressBar"; // apna custom progress bar use karna
import { Fonts } from "../utlis/Fonts";

interface Props {
  totalExpenses: number;
  totalBudget: number;
  lastUpdated: string;
  title:string;
}

const GiftListSummaryCard: React.FC<Props> = ({ totalExpenses, totalBudget, lastUpdated,title }) => {
  const percentage = (totalExpenses / totalBudget) * 100;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>Last updated: {lastUpdated}</Text>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontFamily:Fonts.ralewayMedium}}>Total Expenses</Text>
          <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
        </View>
        <View>
          <Text  style={{fontFamily:Fonts.ralewayMedium}}>Total Budget</Text>
          <Text style={styles.value}>${totalBudget.toFixed(2)}</Text>
        </View>
      </View>

      <ProgressBar progress={percentage} />
      <Text style={styles.footer}>{percentage.toFixed(0)}% of budget used</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
  },
  header: { flexDirection: "row", justifyContent: "space-between" },
  title: { fontSize: 16, fontFamily:Fonts.ralewaySemiBold },
  date: { fontSize: 12, color: "gray",fontFamily:Fonts.ralewayMedium  },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 12 },
  value: { fontSize: 14,fontFamily:Fonts.ralewaySemiBold },
  footer: { fontSize: 12, color: "gray", marginTop: 6 },
});

export default GiftListSummaryCard;
