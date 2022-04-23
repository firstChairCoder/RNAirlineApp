export interface FlightData {
  id: string;
  destination: string;
  destinationIata: string;
  time: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
