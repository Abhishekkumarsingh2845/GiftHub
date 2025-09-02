import React from "react";
import { Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const OnboardImage = ({ item }: any) => {
  if (item.ImageComponent) {
    // 👉 SVG case
    const SvgComp = item.ImageComponent;
    return (
      <SvgComp
        width={width  }
        height={height * 0.4  }
        
      />
    );
  }

  if (item.image) {
    // 👉 PNG/JPG case
    return (
      <Image
        source={item.image}
        style={{
          width: width * 0.9,
          height: height * 0.4,
          resizeMode: "contain",
        }}
      />
    );
  }

  return null;
};

export default OnboardImage;
