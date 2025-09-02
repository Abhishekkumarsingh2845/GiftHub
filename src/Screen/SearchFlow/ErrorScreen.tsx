import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Error from '../../assets/images/Error.svg'
import Home from '../../assets/images/Home.svg'
import { Fonts } from "../../utlis/Fonts";
import MaginifyingGlass from '../../assets/images/MagnifyingGlass.svg'
import ThreeLine from  '../../assets/images/threeline.svg'
import PrimaryButton from "../../components/PrimaryButton";
import { colors } from "../../utlis/colors";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
import ShareIcon from'../../assets/images/sharebtn.svg'
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import RoundRoatate from '../../assets/images/roundrotate.svg'

interface ErrorScreenProps {
  onBack?: () => void;
  onRetry?: () => void;
  onBrowseSimilar?: () => void;
  onViewGiftList?: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({

  onBack,
  onRetry,
  onBrowseSimilar,
  onViewGiftList,
}) => {
    const navigation=useNavigation()
    const handleViewGift=()=>{
        navigation.navigate('ProductDetails')

    }

  return (
    <Wrapper>
    <View style={styles.container}>
      {/* Header */}
    <Header showBack={true} title="Product Details"/>

      {/* Error State */}
      <View style={styles.errorContainer}>
        <Error width={60} height={60}/>
        <Text style={styles.errorText}>Something went wrong</Text>
      </View>

      {/* Error Details */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Something went wrong</Text>
        <Text style={styles.subtitle}>
          We couldn’t fetch this product’s details right now. Try again later.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
  {/* Back to Home (Outline Button with icon) */}
  <PrimaryButton
    title="Back to Home"
    
    onPress={handleViewGift}
    style={[  styles.buttonBack,styles.outlineButton]}
    textStyle={styles.outlineText}
  >
    <Home width={18} height={18} style={styles.btnIcon} />
  </PrimaryButton>

  {/* Try Again (Filled Button with icon) */}
  <PrimaryButton
    title="Try Again"
    onPress={onRetry || (() => {})}
    style={[ styles.buttonTry, styles.fillButton]}
    textStyle={styles.fillText}
  >
    <RoundRoatate width={18} height={18} style={styles.btnIcon} />
   
  </PrimaryButton>
</View>

        {/* While you wait */}
        <Text style={styles.sectionTitle}>While you wait</Text>
        <View>
  <TouchableOpacity style={styles.listItem} onPress={onBrowseSimilar}>
    <MaginifyingGlass width={20}/>
    <Text style={styles.listText}>Browse similar products</Text>
    <ShareIcon width={20} height={20} style={{ marginLeft: "auto" }} /> 
  </TouchableOpacity>

  <TouchableOpacity style={styles.listItem} onPress={onViewGiftList}>
    <ThreeLine width={20}/>
    <Text style={styles.listText}>View your gift lists</Text>
    <ShareIcon width={20} height={20} style={{ marginLeft: "auto" }} /> 
  </TouchableOpacity>
</View>

      </View>
    </View>
    </Wrapper>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F9FAFB",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorIcon: {
    width: 50,
    height: 50,
    marginBottom: 12,
    resizeMode: "contain",
  },
  errorText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },
  bottomSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height:'50%'
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#111827",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 16,
    fontFamily:Fonts.ralewayRegular
  },
buttonRow: {
  flexDirection: "row",
  justifyContent: "flex-start",  // 👈 left align
  alignItems: "center",
  marginBottom: 20,
  gap: 10,                       // 👈 buttons ke beech spacing
},

buttonBack: {
  backgroundColor: colors.primary,
  height: scaleHeight(40),
  borderRadius: scaleWidth(25),
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 16,  
  width:'55%' ,
  right:20      // 👈 fixed padding instead of % width
},

buttonTry: {
  backgroundColor: colors.primary,
  height: scaleHeight(40),
  borderRadius: scaleWidth(25),
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 16,
width:'55%'  ,
right:20
},
  outlineButton: {
    borderWidth: 1,
    borderColor: "#0066FF",
    backgroundColor: "#fff",
  },
  fillButton: {
    backgroundColor: "#0066FF",
  },
  btnIcon: {
    width: 18,
    height: 18,
   right:15
   
    
  },
  outlineText: {
    color: "#0066FF",
    fontWeight: "600",
    fontSize: 16,
    right:10,
    fontFamily:Fonts.ralewayRegular
  },
  fillText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
     fontFamily:Fonts.ralewayRegular,
     right:10
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 12,
    fontFamily:Fonts.ralewayMedium
  },
listItem: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 14,
  borderBottomWidth: 1,
  borderBottomColor: "#E5E7EB",
},

  listIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
    resizeMode: "contain",
  },
  listText: {
    fontSize: 14,
    color: "#374151",
    fontFamily:Fonts.ralewaySemiBold,
    left:10
  },
});
