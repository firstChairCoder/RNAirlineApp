import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  bagWrapper: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  checkboxWrapper: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "lightgray",
      },
    }),
  },
  iconWrapper: {
    marginHorizontal: 15,
  },
  baggageElementWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceWrapper: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  price: {
    fontWeight: "bold",
  },
  size: {
    color: "gray",
    fontSize: 12,
  },
});

interface BaggageItemProps {
  value: boolean;
  setValue: () => void;
  icon: any;
  name: string;
  size: string;
  price: string;
}

export default class BaggageClassComponent extends React.Component<BaggageItemProps> {
  render() {
    const { value, setValue, icon, name, size, price } = this.props;
    return (
      <View style={styles.baggageElementWrapper}>
        <View style={styles.bagWrapper}>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              status={value ? "checked" : "unchecked"}
              onPress={setValue}
            />
          </View>
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name={icon} size={35} color="black" />
          </View>
          <View>
            <Text>{name}</Text>
            <Text style={styles.size}>{size}</Text>
          </View>
        </View>
        <View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </View>
    );
  }
}
