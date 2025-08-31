// scaleUtil.ts
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

// 👇 You can define wrapper functions if you want more readable names
const scaleWidth = (size: number, factor: number = 0.5) =>
  moderateScale(size, factor);

const scaleHeight = (size: number, factor: number = 0.5) =>
  moderateVerticalScale(size, factor);

// ✅ Export everything
export {
  scale,                 // Direct width scaling
  verticalScale,         // Direct height scaling
  moderateScale,         // Moderate width scaling (recommended)
  moderateVerticalScale, // Moderate height scaling
  scaleWidth,            // Wrapper for moderateScale
  scaleHeight,           // Wrapper for moderateVerticalScale
};
