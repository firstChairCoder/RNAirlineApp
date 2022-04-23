import React, { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, textStyles } from "@constants";
import type RBSheet from "react-native-raw-bottom-sheet";
import type { ModalData } from "@types";
import { SafeAreaView } from "react-native-safe-area-context";
import { t } from "@translations";

import MapView from "./components/MapView/MapView";
import HeaderWithInput from "./components/HeaderWithInput";
import flightUtils from "../../flightUtils";
import flights from "../../data";
import FlightCard from "./components/FlightCard";
import EmptyState from "./components/EmptyState";
import Switch from "./components/Switch";
import FlightInfoModal from "./components/FlightInfoModal";

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.blue,
  },
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  flightsList: {
    backgroundColor: colors.whiteBackground,
    paddingHorizontal: 20,
  },
  openedToday: {
    ...textStyles.openedToday,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  switchContainer: {
    position: "absolute",
    top: 50 + 28,
    right: 20,
  },
});

const Connections = () => {
  const [isMapView, setIsMapView] = useState(false);
  const [originAirport, setOriginAirport] = useState<{
    iata: string;
    city: string;
  } | null>(null);
  const [modalData, setModalData] = useState<ModalData>({
    id: "",
    destination: "",
    destinationIata: "",
    time: "",
    origin: "",
    originIata: "",
  });
  const [searchingFlights, setSearchingFlights] = useState(false);
  const [fromText, setFromText] = useState("");
  const [searchResults, setSearchResults] = useState(
    flightUtils.autocompleteListInitialState
  );
  const [inputExpanded, setInputExpanded] = useState(false);

  const modalRef = useRef<RBSheet | null>(null);

  const mapViewContainerStyle = {
    opacity: isMapView ? 1 : 0,
    ...StyleSheet.absoluteFillObject,
  };

  const openModal = useCallback((newModalData) => {
    modalRef?.current?.open();
    setModalData(newModalData);
  }, []);

  const listViewContainerStyle = {
    opacity: !isMapView ? 1 : 0,
    ...StyleSheet.absoluteFillObject,
  };

  const onChangeText = useCallback((text) => {
    if (text.length > 1) {
      setSearchResults(flightUtils.searchCityAutocomplete(text));
    } else {
      setSearchResults(flightUtils.autocompleteListInitialState);
    }
    setFromText(text);
  }, []);

  const handleCitySelect = useCallback(({ iata, city }) => {
    setOriginAirport({
      iata,
      city,
    });
    setFromText(city);
    setSearchingFlights(true);
    Keyboard.dismiss();
    setTimeout(() => {
      setSearchingFlights(false);
    }, 2000);
  }, []);

  const renderFlight = ({
    item: { destination, destinationIata, time, id },
  }: {
    item: {
      destination: string;
      destinationIata: string;
      time: string;
      id: string;
    };
  }) => {
    if (originAirport !== null) {
      return (
        <FlightCard
          id={id}
          destination={destination}
          destinationIata={destinationIata}
          time={time}
          origin={originAirport.city}
          originIata={originAirport.iata}
          onPress={openModal}
        />
      );
    }
    return null;
  };

  const renderBody = () => {
    if (searchingFlights || originAirport) {
      return (
        <FlatList
          style={styles.flightsList}
          data={searchingFlights ? [] : flights}
          renderItem={renderFlight}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            searchingFlights ? (
              <ActivityIndicator color={colors.blue} />
            ) : (
              <Text style={styles.openedToday}>
                {t.connections.openedToday}
              </Text>
            )
          }
        />
      );
    }
    return <EmptyState />;
  };

  return (
    <>
      <View
        pointerEvents={isMapView ? "auto" : "none"}
        style={mapViewContainerStyle}
      >
        {originAirport ? (
          <MapView originAirport={originAirport} openModal={openModal} />
        ) : null}
      </View>
      <View
        pointerEvents={isMapView ? "none" : "auto"}
        style={listViewContainerStyle}
      >
        <SafeAreaView style={styles.safeArea} />
        <HeaderWithInput
          originAirport={originAirport}
          searchingFlights={searchingFlights}
          fromText={fromText}
          onChangeText={onChangeText}
          setSearchResults={setSearchResults}
          setOriginAirport={setOriginAirport}
          inputExpanded={inputExpanded}
          setInputExpanded={setInputExpanded}
          searchResults={searchResults}
          handleCitySelect={handleCitySelect}
        />
        {renderBody()}
      </View>

      {!!originAirport && !searchingFlights && (
        <View style={styles.switchContainer}>
          <Switch toggled={isMapView} setToggled={setIsMapView} />
        </View>
      )}
      <FlightInfoModal modalRef={modalRef} {...modalData} />
    </>
  );
};

export default Connections;
