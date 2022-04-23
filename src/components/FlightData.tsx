import React from "react";
import type { ViewStyle } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { t } from "@translations";
import { colors, responsive, textStyles } from "@constants";

import FlightInfo from "./FlightInfo";

const innerBoxHeight = 118;
const innerMargin = responsive.isSmallScreen ? 0 : 24;
const innerRightMargin = responsive.isSmallScreen ? 0 : 16;

const buttonCommonStyles: ViewStyle = {
  height: 56,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  marginHorizontal: innerMargin,
  marginBottom: 16,
};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: colors.white,
  //     paddingHorizontal: 20,
  //   },
  boxesRow: {
    flexDirection: "row",
  },
  leftOuterBox: {
    flex: 1,
  },
  leftInnerBox: {
    height: innerBoxHeight,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: colors.modalBorder,
    backgroundColor: colors.white,
    paddingLeft: innerMargin,
  },
  rightBox: {
    width: 95,
    marginRight: innerRightMargin,
    backgroundColor: colors.priceBg,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  priceLabel: {
    ...textStyles.priceLabel,
    color: colors.textSecondary,
  },
  oldPrice: {
    ...textStyles.oldPrice,
    color: colors.textPrimary,
  },
  newPrice: {
    ...textStyles.newPrice,
    color: colors.textPrimary,
  },
  //   transferRow: {
  //     paddingLeft: innerMargin,
  //     height: 56,
  //     justifyContent: "center",
  //     borderBottomWidth: 1,
  //     borderColor: colors.modalBorder,
  //     marginBottom: 20,
  //   },
  //   transferLabel: {
  //     ...textStyles.transferLabel,
  //     color: colors.textSecondary,
  //   },
  //   transferValue: {
  //     color: colors.transferValue,
  //   },
  //   guideButton: {
  //     ...buttonCommonStyles,
  //     backgroundColor: colors.whiteBackground,
  //   },
  //   guideButtonText: {
  //     ...textStyles.modalButtonText,
  //     color: colors.blue,
  //   },
  //   detailsButton: {
  //     ...buttonCommonStyles,
  //     backgroundColor: colors.blue,
  //   },
  //   detailsButtonText: {
  //     ...textStyles.modalButtonText,
  //     color: colors.white,
  //   },
});

interface FlightDataProps {
  destination: string;
  destinationIata: string;
  time: string;
  origin: string;
  originIata: string;
}

const FlightData = ({
  destination,
  destinationIata,
  origin,
  originIata,
  time,
}: FlightDataProps) => (
  <View style={styles.boxesRow}>
    <View style={styles.leftOuterBox}>
      <View style={styles.leftInnerBox}>
        <FlightInfo
          destination={destination}
          destinationIata={destinationIata}
          origin={origin}
          originIata={originIata}
          time={time}
        />
      </View>
      <View style={styles.leftInnerBox}>
        <FlightInfo
          destination={origin}
          destinationIata={originIata}
          origin={destination}
          originIata={destinationIata}
          time={time}
        />
      </View>
    </View>
    <View style={styles.rightBox}>
      <Text style={styles.priceLabel}>{t.flightInfoModal.priceLabel}</Text>
      <Text style={styles.newPrice}>{t.flightInfoModal.newPrice}</Text>
      <Text style={styles.oldPrice}>{t.flightInfoModal.oldPrice}</Text>
    </View>
  </View>
);

export default FlightData;
