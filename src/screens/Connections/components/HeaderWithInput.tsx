import React, { useRef, useState } from "react";
import type { TextStyle } from "react-native";
import {
  Animated,
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, Icon } from "@components";
import { t } from "@translations";
import { colors, iconTypes, responsive, textStyles } from "@constants";

import type { AirportData } from "../../../types/AirportData";
import flightUtils from "../../../flightUtils";
import AutocompleteItem from "./AutocompleteItem";

const headerBlue = responsive.isSmallScreen ? 170 : 180;
const headerWhite = responsive.isSmallScreen ? 60 : 74;
const inputInnerPadding = 24;
const inputOuterSpace = 24;
const inputIconSize = 24;
const inputLeftMargin = 28;
const autoCompleteListLeftPadding =
  inputInnerPadding + inputLeftMargin + inputIconSize;
const inputExpandedListArea = 280;

const labelCommonStyles: TextStyle = {
  color: colors.inputLabel,
  position: "absolute",
  left: inputLeftMargin,
  minWidth: 70,
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.blue,
  },
  headerTop: {
    backgroundColor: colors.blue,
    height: headerBlue,
    paddingHorizontal: inputOuterSpace,
    paddingTop: 16,
  },
  headerTopShrinked: {
    height: 60,
  },
  headerBottom: {
    backgroundColor: colors.whiteBackground,
    height: headerWhite,
  },
  headerBottomExpanded: {
    height: headerWhite + inputExpandedListArea,
  },
  inputContainer: {
    backgroundColor: colors.whiteBackground,
    height: headerWhite,
    alignItems: "center",
    marginHorizontal: inputOuterSpace,
    borderRadius: 8,
    position: "absolute",
    bottom: headerWhite / 2,
    right: 0,
    left: 0,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowColor: colors.inputShadow,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  autoCompleteList: {
    paddingRight: inputInnerPadding,
    paddingLeft: autoCompleteListLeftPadding,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    height: headerWhite,
    paddingHorizontal: inputInnerPadding,
  },
  inputExpandedList: {
    height: inputExpandedListArea,
    width: "100%",
  },
  inputContainerExpanded: {
    height: headerWhite + inputExpandedListArea,
  },
  textInputContainer: {
    height: 40,
    justifyContent: "flex-end",
    flex: 1,
    paddingLeft: inputLeftMargin,
  },
  input: {
    ...textStyles.input,
    color: colors.textPrimary,
    height: 23,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  inputIata: {
    ...textStyles.inputIata,
  },
  crossContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.clearButtonBg,
    alignItems: "center",
    justifyContent: "center",
  },
  labelStart: {
    ...textStyles.input,
    ...labelCommonStyles,
  },
  labelEnd: {
    ...textStyles.inputFloatingLabel,
    ...labelCommonStyles,
  },
});

interface HeaderWithInputProps {
  originAirport: { city: string; iata: string } | null;
  searchingFlights: boolean;
  fromText: string;
  onChangeText: (text: string) => void;
  setSearchResults: (searchResults: AirportData[]) => void;
  setOriginAirport: (airport: { iata: string; city: string } | null) => void;
  inputExpanded: boolean;
  setInputExpanded: (isInputExpanded: boolean) => void;
  searchResults: AirportData[];
  handleCitySelect: ({ iata, city }: { iata: string; city: string }) => void;
}

const HeaderWithInput = ({
  originAirport,
  searchingFlights,
  fromText,
  onChangeText,
  setSearchResults,
  setOriginAirport,
  inputExpanded,
  setInputExpanded,
  searchResults,
  handleCitySelect,
}: HeaderWithInputProps) => {
  const [labelMinimized, setLabelMinimized] = useState(false);
  const inputRef = useRef<TextInput | null>(null);
  const inputLabelAnimation = useRef(new Animated.Value(0)).current;

  const renderInputRight = () => {
    if (originAirport) {
      return <Text style={styles.inputIata}>{`(${originAirport.iata})`}</Text>;
    }
    if (fromText) {
      return (
        <TouchableOpacity
          onPress={() => {
            inputRef?.current?.clear();
            setSearchResults(flightUtils.autocompleteListInitialState);
          }}
          style={styles.crossContainer}
        >
          <Icon
            name={iconTypes.cross}
            size={12}
            color={colors.clearButtonCross}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderItem = ({
    item: { iata, name, city },
  }: {
    item: { iata: string; name: string; city: string };
  }) => {
    return (
      <AutocompleteItem
        iata={iata}
        name={name}
        city={city}
        handleCitySelect={handleCitySelect}
      />
    );
  };

  return (
    <View style={styles.headerContainer}>
      <View
        style={[styles.headerTop, inputExpanded && styles.headerTopShrinked]}
      >
        {!inputExpanded && (
          <Header
            headerFirstLine={t.connections.headerFirst}
            headerHighlightedText={t.connections.headerHighlighted}
            textColor={colors.white}
            highlightedTextColor={colors.white}
          />
        )}
      </View>
      <View
        style={[
          styles.headerBottom,
          inputExpanded && styles.headerBottomExpanded,
        ]}
      />
      <View
        style={[
          styles.inputContainer,
          inputExpanded && styles.inputContainerExpanded,
        ]}
      >
        <View style={styles.inputRow}>
          <Icon
            name={iconTypes.flights}
            size={inputIconSize}
            color={colors.textPrimary}
          />
          <View style={styles.textInputContainer}>
            <Animated.Text
              style={[
                labelMinimized ? styles.labelEnd : styles.labelStart,
                {
                  top: inputLabelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [8, 0],
                  }),
                },
              ]}
            >
              {t.connections.inputPlaceholder}
            </Animated.Text>
            <TextInput
              ref={inputRef}
              style={styles.input}
              selectionColor={colors.textPrimary}
              value={fromText}
              onChangeText={onChangeText}
              autoCorrect={false}
              editable={!searchingFlights}
              onFocus={() => {
                if (originAirport) {
                  setSearchResults(
                    flightUtils.searchCityAutocomplete(originAirport.city)
                  );
                }
                LayoutAnimation.easeInEaseOut();
                setInputExpanded(true);
                setOriginAirport(null);
                if (!labelMinimized) {
                  setLabelMinimized(true);
                  Animated.timing(inputLabelAnimation, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: false,
                  }).start();
                }
              }}
              onBlur={() => {
                LayoutAnimation.easeInEaseOut();
                setInputExpanded(false);
                if (labelMinimized && !fromText) {
                  setLabelMinimized(false);
                  Animated.timing(inputLabelAnimation, {
                    toValue: 0,
                    duration: 150,
                    useNativeDriver: false,
                  }).start();
                }
              }}
            />
          </View>
          {renderInputRight()}
        </View>
        {inputExpanded && (
          <View style={styles.inputExpandedList}>
            <FlatList
              style={styles.autoCompleteList}
              data={searchResults}
              renderItem={renderItem}
              keyExtractor={(item) => item.iata}
              keyboardShouldPersistTaps="handled"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default HeaderWithInput;
