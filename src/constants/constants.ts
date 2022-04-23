import { Platform } from "react-native";

import responsive from "./responsive";

const constants = {
  // General
  isIos: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
  // UI
  horizontalSpace: 24,
  newsItemsSpace: 16,
  circledButtonSize: responsive.isSmallScreen ? 64 : 88,
  homeSectionsVerticalMargin: 24,
};

export default constants;
