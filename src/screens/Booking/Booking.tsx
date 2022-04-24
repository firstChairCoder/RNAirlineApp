import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { FlightData } from "@components";
import type { RootStackParamsList } from "@navigation/types";

import Baggage from "./components/Baggage";
import Form from "./components/PassengerForm/Form";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    width: "100%",
  },
});

const Booking = () => {
  const route = useRoute<RouteProp<RootStackParamsList, "BookingScreen">>();
  const [state, setState] = React.useState({
    cabin: true,
    checked: true,
  });

  const { id, destination, destinationIata, origin, originIata, time } =
    route.params.modalData;

  const setCabinVal = () => setState({ ...state, cabin: !state.cabin });
  const setCheckedVal = () => setState({ ...state, checked: !state.checked });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <FlightData
          destination={destination}
          destinationIata={destinationIata}
          origin={origin}
          originIata={originIata}
          time={time}
        />
        <Baggage
          cabin={state.cabin}
          checked={state.checked}
          setCabinValue={setCabinVal}
          setCheckedValue={setCheckedVal}
        />
        <Form flightId={id} />
      </ScrollView>
    </View>
  );
};

export default Booking;
