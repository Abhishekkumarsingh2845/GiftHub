import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ONBOARD_DATA } from "../../utlis/constant";
import { scaleWidth } from "../../utlis/responsive";
import Wrapper from "../../components/Wrapper";
import { Images } from "../../assets/images";
import OnboardImage from "../../components/OnboardImage";
import { Fonts } from "../../utlis/Fonts";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";


const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });
  const navigation=useNavigation()

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  

  const handleNext = () => {
    if (currentIndex < ONBOARD_DATA.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("🎉 Onboarding Completed");
      navigation.navigate("LoginScreen") // add navigation here
    }
  };
    const OnPressSkip = (): void => {
    navigation.reset({
      index: 0,
      routes: [{
        name: AppRoutes.DRAWERSTACK
      }],
    });
    setTimeout(() => {
      dispatch(setNavigationValue(AppRoutes.DRAWERSTACK));
    }, 5);
  }


  const renderItem = ({ item }: any) => (
    <Wrapper backgroundImage={Images.onboarding}>
    <View style={styles.slide}>
      
      {/* Top Image */}
      <View style={{ justifyContent: 'center', alignItems: 'center' ,marginTop:scaleWidth(275)}}>
  
  <OnboardImage  item={item} />
  </View>
      {/* Bottom White Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          {ONBOARD_DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentIndex ? "#0066FF" : "#D0D0D0",
                },
              ]}
            />
          ))}
        </View>

        {/* Button */}
       <PrimaryButton
       title="Get Started"
       onPress={handleNext}
       />
      </View>
    </View>
    </Wrapper>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ONBOARD_DATA}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  slide: {
    width: width,
    height:height,
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomCard: {
    backgroundColor: "#FFFFFF",
    width: width ,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: "center",
    bottom:0,
   


    // Shadow / Elevation
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: -2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // elevation: 5,

    position: "absolute",
    
  
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0B0B0B",
    textAlign: "center",
    marginBottom: 10,
  },
  body: {
    fontSize: 28,
    color: "#4F4F4F",
    textAlign: "center",
 
    marginBottom: 20,
    fontFamily:Fonts.ralewaySemiBold
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#0066FF",
    width: width * 0.9,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
