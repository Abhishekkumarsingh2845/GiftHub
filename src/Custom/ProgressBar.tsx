// ProgressBar.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  progress: number; // value 0 to 1
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  radius?: number;
}

const ProgressBar: React.FC<Props> = ({
  progress,
  height = 8,
  backgroundColor = "#E5E7EB",
  fillColor = "#2A66FF",
  radius = 8,
}) => {
  return (
    <View
      style={[
        styles.container,
        { height, backgroundColor, borderRadius: radius },
      ]}
    >
      <View
        style={{
          width: `${Math.min(progress * 100, 100)}%`,
          height: "100%",
          backgroundColor: fillColor,
          borderRadius: radius,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
  },
});

export default ProgressBar;
