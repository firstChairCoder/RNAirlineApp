import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, iconTypes, responsive, textStyles } from "@constants";
import { Icon } from "@components";

const styles = StyleSheet.create({
  iata: {
    ...textStyles.flightCardIata,
    color: colors.textPrimary,
  },
  destinationIata: {
    color: colors.destinationIata,
  },
  city: {
    ...textStyles.flightCardCity,
    color: colors.textSecondary,
    maxWidth: responsive.isSmallScreen ? 50 : 72,
  },
  time: {
    ...textStyles.flightCardTime,
    color: colors.textPrimary,
  },
  flightInfoRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  arrowIcon: {
    marginTop: 6,
    marginHorizontal: 16,
  },
});

interface FlightInfoProps {
  destination: string;
  destinationIata: string;
  time: string;
  origin: string;
  originIata: string;
}

const FlightInfo = ({
  destination,
  destinationIata,
  origin,
  originIata,
  time,
}: FlightInfoProps) => {
  return (
    <View>
      <View style={styles.flightInfoRow}>
        <View>
          <Text style={styles.iata}>{originIata}</Text>
          <Text numberOfLines={1} style={styles.city}>
            {origin}
          </Text>
        </View>
        <Icon
          name={iconTypes.arrowRight}
          size={12}
          color={colors.black}
          style={styles.arrowIcon}
        />
        <View>
          <Text style={[styles.iata, styles.destinationIata]}>
            {destinationIata}
          </Text>
          <Text numberOfLines={1} style={styles.city}>
            {destination}
          </Text>
        </View>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default React.memo(FlightInfo);
