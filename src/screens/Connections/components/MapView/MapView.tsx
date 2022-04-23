import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map, { Marker } from "react-native-maps";
import { CircledButton } from "@components";
import { colors, iconTypes, textStyles } from "@constants";
import type { FlightData } from "@types";

import flights from "../../../../data";
import CustomMapStyle from "./CustomMapStyle.json";

const INIT_REGION = {
  latitude: 41.8962667,
  longitude: 11.3340056,
  latitudeDelta: 12,
  longitudeDelta: 12,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    alignItems: "center",
  },
  iata: {
    ...textStyles.mapIata,
    color: colors.blue,
  },
  city: {
    ...textStyles.mapCity,
    color: colors.textSecondary,
  },
});

interface MapViewProps {
  openModal: (modalData: {
    destination: string;
    destinationIata: string;
    time: string;
    origin: string;
    originIata: string;
    id: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }) => void;
  originAirport: {
    city: string;
    iata: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MapViewState {}

class MapView extends React.Component<MapViewProps, MapViewState> {
  mapRef = React.createRef<Map>();

  renderMarker = (data: FlightData) => {
    return (
      <Marker
        key={data.id}
        identifier={`${data.id}`}
        coordinate={data.location}
        pinColor={colors.white}
        stopPropagation
        tracksViewChanges={false}
        onPress={() => this.handlePress(data)}
      >
        <View style={styles.marker}>
          <CircledButton
            withShadow={false}
            iconName={iconTypes.flights}
            iconSize={24}
          />
          <Text style={styles.iata}>{data.destinationIata}</Text>
          <Text style={styles.city}>{data.destination}</Text>
        </View>
      </Marker>
    );
  };

  handlePress = (flightData: FlightData) => {
    const { openModal, originAirport } = this.props;
    const modalData = {
      ...flightData,
      destination: flightData.destination,
      destinationIata: flightData.destinationIata,
      time: flightData.time,
      origin: originAirport.city,
      originIata: originAirport.iata,
    };
    openModal(modalData);
  };

  render() {
    return (
      <>
        <Map
          style={styles.container}
          initialRegion={INIT_REGION}
          customMapStyle={CustomMapStyle}
          ref={this.mapRef}
          moveOnMarkerPress={false}
        >
          {flights.map((item: FlightData) => this.renderMarker(item))}
        </Map>
      </>
    );
  }
}

export default MapView;
