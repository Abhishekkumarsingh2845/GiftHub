import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Fonts } from '../utlis/Fonts';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
// import { scaleWidth, scaleHeight } from '../utlis/scale';

export default function ImageUploadBox() {
  return (
    <View>
      {/* Label */}
      <Text
        style={{
          fontSize: scaleWidth(15), // scaled font size
          color: '#6C7278',
          marginBottom: scaleHeight(8),
          fontFamily: Fonts.ralewaySemiBold,
        }}
      >
        Choose Image (Optional)
      </Text>

      {/* Upload Box */}
      <View
        style={{
          backgroundColor: 'white',
          padding: scaleWidth(10),
          borderRadius: scaleWidth(10),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#ccc',
            borderRadius: scaleWidth(8),
            paddingVertical: scaleHeight(40),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          {/* Upload Icon Placeholder */}
          <View
            style={{
              width: scaleWidth(30),
              height: scaleWidth(30),
              borderWidth: 2,
              borderColor: '#555',
              borderRadius: scaleWidth(4),
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: scaleHeight(8),
            }}
          >
            <Text
              style={{
                fontSize: scaleWidth(18),
                fontWeight: 'bold',
                color: '#555',
              }}
            >
              ↑
            </Text>
          </View>

          {/* Text */}
          <Text
            style={{
              fontSize: scaleWidth(15),
              color: '#0C1523',
              marginBottom: scaleHeight(4),
              fontFamily: Fonts.ralewayRegular,
            }}
          >
            Tap to upload image
          </Text>
          <Text
            style={{
              fontSize: scaleWidth(13),
              color: '#667085',
              fontFamily: Fonts.ralewayRegular,
            }}
          >
            JPG, PNG up to 5MB
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
