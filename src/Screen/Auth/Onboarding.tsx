import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ONBOARD_DATA } from "../../utlis/constant";
import { Fonts } from "../../utlis/Fonts";
import Wrapper from "../../components/Wrapper";
import PrimaryButton from "../../components/PrimaryButton";
import { Images } from "../../assets/images";
import { scaleWidth } from "../../utlis/responsive";

const width = Dimensions.get("window").width;
const height=Dimensions.get('window').height

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleNext = () => {
    if (currentIndex < ONBOARD_DATA.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  const renderItem = ({ item }: any) => (
    <Wrapper disablePadding backgroundImage={Images.onboarding}>
      <View style={styles.slide}>
        {/* Top Image */}
        <View style={styles.imageContainer}>
         <Image
          source={item.image} // 👈 yaha aap ONBOARD_DATA ka image use kar rahe ho
          style={styles.img}
          resizeMode="contain"
        />
        </View>

        {/* Bottom Card */}
        <View style={styles.bottomCard}>
          <Text style={styles.body}>{item.body}</Text>

          {/* Pagination Dots */}
          <View style={styles.dotsContainer}>
            {ONBOARD_DATA.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  { backgroundColor: index === currentIndex ? "#0066FF" : "#D0D0D0" },
                ]}
              />
            ))}
          </View>

          {/* Button */}
          <PrimaryButton
            title={currentIndex === ONBOARD_DATA.length - 1 ? "Get Started" : "Next"}
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
    backgroundColor: "#F5F7FB", // light background
  },
  slide: {
    width,
    height,
    alignItems: "center",
    justifyContent: "flex-end",

  },
  imageContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    marginTop:250

    

  },
  img:{
    width:scaleWidth(width*0.9),
    height:height*0.45
  },
  bottomCard: {
    flex: 0.4,
    backgroundColor: "#FFFFFF",
    width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: "center",
    
  },
  body: {
    fontSize: 26,
    color: "#0B0B0B",
    textAlign: "center",
    marginBottom: 25,
    fontFamily: Fonts.ralewaySemiBold,
    lineHeight: 38,

  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});
