import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { t } from "@translations";

import BaggageItem from "./BaggageItem";

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  mainContainer: {
    width: "100%",
  },
  sectionTitle: {
    marginVertical: 10,
    fontWeight: "bold",
  },
  // formContainer: {
  //   padding: 10
  // }
});

interface BaggageProps {
  cabin: boolean;
  checked: boolean;
  setCabinValue: () => void;
  setCheckedValue: () => void;
}

const Baggage = ({
  cabin,
  checked,
  setCabinValue,
  setCheckedValue,
}: BaggageProps) => (
  <View style={styles.mainContainer}>
    <Divider />
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{t.baggage.title}</Text>
      <BaggageItem
        value={cabin}
        setValue={setCabinValue}
        icon={"bag-personal"}
        name={t.baggage.cabin}
        size={t.baggage.cabinSize}
        price={t.baggage.price}
      />
      <BaggageItem
        value={checked}
        setValue={setCheckedValue}
        icon={"bag-checked"}
        name={t.baggage.checked}
        size={t.baggage.checkedSize}
        price={t.baggage.price}
      />
    </View>
    <Divider />
  </View>
);

export default Baggage;
