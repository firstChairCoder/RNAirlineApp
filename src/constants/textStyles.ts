import type { TextStyle } from "react-native";
import { StyleSheet } from "react-native";

import colors from "./colors";
import responsive from "./responsive";

const fonts = {
  primary: "Muli-Regular",
  primarySemiBold: "Muli-SemiBold",
  primaryBold: "Muli-Bold",
  primaryExtraBold: "Muli-ExtraBold",
};

// Home
const header = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(32),
  lineHeight: responsive.normalizedFontSize(48),
};

const headerBold = {
  fontFamily: fonts.primaryBold,
};

const sectionTitle = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(14),
  lineHeight: responsive.normalizedFontSize(24),
  color: colors.textPrimary,
};

const newsTitle = {
  fontFamily: fonts.primarySemiBold,
  fontSize: responsive.normalizedFontSize(20),
  lineHeight: responsive.normalizedFontSize(24),
};

const newsAuthor = {
  fontFamily: fonts.primaryBold,
  fontSize: responsive.normalizedFontSize(12),
  lineHeight: responsive.normalizedFontSize(24),
};

const newsDate = {
  fontFamily: fonts.primaryExtraBold,
  fontSize: 8,
  lineHeight: 10,
};

const tileTitle = {
  fontFamily: fonts.primaryExtraBold,
  fontSize: 8,
  lineHeight: 10,
};

const tileFlightCount = {
  fontFamily: fonts.primaryBold,
  fontSize: responsive.normalizedFontSize(32),
};

const tileLocation = {
  fontFamily: fonts.primarySemiBold,
  fontSize: responsive.normalizedFontSize(15),
  lineHeight: responsive.normalizedFontSize(20),
};

// Connections
const openedToday = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(14),
  lineHeight: responsive.normalizedFontSize(24),
};

const flightCardIata = {
  fontFamily: fonts.primaryBold,
  fontSize: responsive.normalizedFontSize(20),
  lineHeight: responsive.normalizedFontSize(24),
};

const flightCardCity = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(12),
  lineHeight: responsive.normalizedFontSize(22),
};

const flightCardTime = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(20),
  lineHeight: responsive.normalizedFontSize(24),
};

const autoCompleteCity = {
  fontFamily: fonts.primaryBold,
  fontSize: responsive.normalizedFontSize(14),
  lineHeight: responsive.normalizedFontSize(20),
};
const autoCompleteAirport = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(10),
  lineHeight: responsive.normalizedFontSize(16),
};

const input = {
  fontFamily: fonts.primarySemiBold,
  fontSize: responsive.normalizedFontSize(18),
  lineHeight: 23,
};

const inputIata = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(14),
  lineHeight: responsive.normalizedFontSize(24),
};

const emptyTitle = {
  fontFamily: fonts.primarySemiBold,
  fontSize: responsive.normalizedFontSize(16),
  lineHeight: responsive.normalizedFontSize(20),
};

const emptyDescription = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(12),
  lineHeight: responsive.normalizedFontSize(20),
};

const mapIata = {
  fontFamily: fonts.primaryBold,
  fontSize: responsive.normalizedFontSize(24),
  lineHeight: responsive.normalizedFontSize(30),
};

const mapCity = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(14),
  lineHeight: responsive.normalizedFontSize(20),
};

const inputFloatingLabel = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(13),
  lineHeight: 16,
};

// TravelGuide Modal
const generalDescription = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(14),
  lineHeight: responsive.normalizedFontSize(24),
};

const tipTitle = {
  fontFamily: fonts.primarySemiBold,
  fontSize: responsive.normalizedFontSize(16),
  lineHeight: responsive.normalizedFontSize(20),
};

const tipDescription = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(12),
  lineHeight: responsive.normalizedFontSize(20),
};

// FlightInfo Modal
const priceLabel = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(12),
  lineHeight: responsive.normalizedFontSize(20),
};
const oldPrice: TextStyle = {
  fontFamily: fonts.primarySemiBold,
  fontSize: responsive.normalizedFontSize(18),
  lineHeight: responsive.normalizedFontSize(30),
  textDecorationLine: "line-through",
};

const newPrice = {
  fontFamily: fonts.primaryBold,
  fontSize: responsive.normalizedFontSize(24),
};
const transferLabel = {
  fontFamily: fonts.primary,
  fontSize: responsive.normalizedFontSize(14),
  lineHeight: responsive.normalizedFontSize(20),
};
const modalButtonText = {
  fontFamily: fonts.primarySemiBold,
  fontSize: responsive.normalizedFontSize(16),
  lineHeight: responsive.normalizedFontSize(20),
};

const textStyles = StyleSheet.create({
  // Home tab
  header,
  headerBold,
  sectionTitle,
  newsTitle,
  newsAuthor,
  newsDate,
  tileTitle,
  tileFlightCount,
  tileLocation,
  // Connections tab
  openedToday,
  flightCardIata,
  flightCardCity,
  flightCardTime,
  autoCompleteCity,
  autoCompleteAirport,
  input,
  inputIata,
  emptyTitle,
  emptyDescription,
  mapIata,
  mapCity,
  inputFloatingLabel,
  // TravelGuide Modal
  generalDescription,
  tipTitle,
  tipDescription,
  // FlightInfo Modal
  priceLabel,
  oldPrice,
  newPrice,
  transferLabel,
  modalButtonText,
});

export default textStyles;
