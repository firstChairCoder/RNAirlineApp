import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, textStyles } from "@constants";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  city: {
    ...textStyles.autoCompleteCity,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  airportName: {
    ...textStyles.autoCompleteAirport,
    color: colors.textSecondary,
  },
});

interface AutoCompleteItemProps {
  iata: string;
  name: string;
  city: string;
  handleCitySelect: ({ iata, city }: { iata: string; city: string }) => void;
}

const AutocompleteItem = ({
  iata,
  name,
  city,
  handleCitySelect,
}: AutoCompleteItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => handleCitySelect({ iata, city })}
      style={styles.container}
    >
      <Text style={styles.city} numberOfLines={1}>
        {city}
      </Text>
      <Text style={styles.airportName} numberOfLines={1}>
        {name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(AutocompleteItem);
