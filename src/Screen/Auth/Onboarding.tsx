import { StyleSheet, View, Image, ImageBackground, KeyboardAvoidingView, StatusBar } from 'react-native';
import React, { useCallback } from 'react';
import { Images } from '../../assets/images';
import Typography from '../../components/Typography';
import { colors } from '../../utlis/colors';
import { Fonts } from '../../utlis/Fonts';
import { scaleHeight, scaleWidth } from '../../utlis/responsive';

const Onboarding = () => {
  const _renderItem = useCallback(
    ({ item, index }: { item: renderItemProps; index: number }) => {
      return (
        <View style={{ width: scaleWidth(375) }}> 
          {/* 375 is base design width, adjust via scaleWidth */}
          <Image source={Images.onboarding} resizeMode="contain" />
          <Typography
            content={item.title}
            fontSize={scaleWidth(24)}
            fontFamily={Fonts.ralewayBold}
            color={colors.primary}
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              lineHeight: scaleHeight(40),
              marginTop: scaleHeight(20),
              width: scaleWidth(340),
            }}
          />
          <Typography
            content={item.body}
            fontSize={scaleWidth(14)}
            fontFamily={Fonts.ralewayRegular}
            color={colors.primary}
            style={{
              textAlign: 'center',
              lineHeight: scaleHeight(22),
              marginTop: scaleHeight(10),
              width: scaleWidth(320),
              alignSelf: 'center',
            }}
          />
        </View>
      );
    },
    [],
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={Images.onboarding}
        style={{ width: scaleWidth(375), height: scaleHeight(812) }} 
        // base iPhone X design size → responsive via scale funcs
      >
        <Image
          source={Images.walkthrough}
          style={{
            width: scaleWidth(360),
            height: undefined,
            aspectRatio: 1,
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  onboardingImg: {},
  footer: {
    paddingHorizontal: scaleWidth(24),
    marginTop: scaleHeight(40),
    marginBottom: scaleHeight(40),
  },
});
