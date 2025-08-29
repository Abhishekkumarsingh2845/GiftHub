import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  scaleWidth } from '../utlis/responsive';
import { colors } from '../utlis/colors';

type TextProps = {
    content : string | undefined; 
    style? : object ; 
    color : string ; 
    fontSize : number ; 
    numberOfLines ? : number ; 
    fontFamily ?: string ;
    onTextPress?:()=>void;
    children?: React.ReactNode;
    textStyle?:object

}


const Typography = ({
    content,
    style,
    color,
    fontSize,
    numberOfLines,
    fontFamily,
    children,
    textStyle,
    onTextPress,
    ...props
}:TextProps) => {
  return (
      <Text 
        onPress={onTextPress}
        numberOfLines={numberOfLines}
        style={[styles.text,style,{fontFamily:fontFamily,fontSize:fontSize,color:color,...textStyle,...props}]}
      >
        {content}
        {children}
      </Text>
  )
}

export default Typography

const styles = StyleSheet.create({
    text:{
        fontSize:scaleWidth(16),
        
    }
})