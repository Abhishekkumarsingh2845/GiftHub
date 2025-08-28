import { StyleSheet, Text, View,Image, ImageBackground} from 'react-native'
import React, { useCallback } from 'react'
import { Images } from '../../assets/images'
import { deviceHeight, deviceWidth, scaleToDeviceHeight, scaleToDeviceWidth } from '../../utlis/responsive'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'react-native'
import CustomButton from '../../Custom/CustomButton'
import Typography from '../../components/Typography'
import { colors } from '../../utlis/colors'
import { Fonts } from '../../utlis/Fonts'

const Onboarding = () => {

     const _renderItem = useCallback(({ item, index }: { item: renderItemProps, index: number }) => {
    return (
      <View style={{ width: deviceWidth }}>
        <Image
          source={Images.onboarding}
          resizeMode='contain'
     
        />
        <Typography
          content={item.title}
          fontSize={scaleToDeviceWidth(deviceWidth * (24 / 375))}
          fontFamily={Fonts.ralewayBold}
          color={colors.primary}
          style={{
            textAlign: "center",
            alignSelf: "center",
            lineHeight: 40,
            marginTop: scaleToDeviceHeight(20),
            width: scaleToDeviceWidth(deviceWidth * 0.95)
          }}
        />
        <Typography
          content={item.body}
          fontSize={scaleToDeviceWidth(deviceWidth * (14 / 375))}
          fontFamily={Fonts.ralewayRegular}
          color={colors.primary}
          style={{
            textAlign: "center",
            lineHeight: 26,
            marginTop: scaleToDeviceHeight(10),
            width: scaleToDeviceWidth(deviceWidth * 0.90),
            alignSelf: "center",
          }}
        />
      </View>
    )
  }, []);

  return (

    <KeyboardAvoidingView>
        <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ImageBackground source={Images.onboarding}
       style={{width:deviceWidth,height:deviceHeight }} >
        <Image source={Images.walkthrough}
        style={{width: scaleToDeviceHeight(deviceWidth * 0.96),
    height: null,
    aspectRatio: 1,
    alignSelf: "center"}}></Image>
       </ImageBackground>
       
   

    
    
    </KeyboardAvoidingView>
    
  
  )
}

export default Onboarding

const styles = StyleSheet.create({
   main:{
   flex:1
 


   },
   onboardingImg:{


   },
   footer: {
    // flex: 1,
    paddingHorizontal: scaleToDeviceHeight(24),
    marginTop: scaleToDeviceHeight(40),
    // justifyContent: 'flex-end',
    marginBottom: scaleToDeviceHeight(40),
  },

})