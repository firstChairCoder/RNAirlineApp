import React from "react";
import { StyleSheet, View } from "react-native";
import { CircledButton, FlightInfo } from "@components";
import type { ModalData } from "@types";
import { colors } from "@constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
});

type FlightCardProps = ModalData & {
  onPress: (modalData: ModalData) => void;
};

const FlightCard = ({
  onPress,
  id,
  destination,
  destinationIata,
  origin,
  originIata,
  time,
}: FlightCardProps) => {
  const handlePress = () => {
    const modalData = {
      id,
      destination,
      destinationIata,
      time,
      origin,
      originIata,
    };
    onPress(modalData);
  };

  return (
    <View style={styles.container}>
      <FlightInfo
        destination={destination}
        destinationIata={destinationIata}
        origin={origin}
        originIata={originIata}
        time={time}
      />
      <CircledButton withShadow={false} onPress={handlePress} />
    </View>
  );
};

export default React.memo(FlightCard);
