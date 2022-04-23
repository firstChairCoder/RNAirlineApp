/* eslint-disable import/no-anonymous-default-export */
import _ from "lodash";
import airportsRaw from "@constants/airports.json";
import type { AirportData } from "@types";

const airportsData = airportsRaw as { [key: string]: AirportData };

const filteredAirports = _.filter(
  airportsData,
  (airport: AirportData) =>
    !!airport.iata && airport.iata !== "0" && !!airport.city && !!airport.name
);
const airports = _.uniqBy(filteredAirports, "iata");

const autocompleteListInitialState = _.filter(airports, (airport) => {
  return (
    airport.iata === "ATL" ||
    airport.iata === "PEK" ||
    airport.iata === "DXB" ||
    airport.iata === "LAX" ||
    airport.iata === "LHR"
  );
});

const searchCityAutocomplete = (searchText: string) =>
  _.filter(
    airports,
    (airport) =>
      airport.city.toLowerCase().includes(searchText.toLowerCase()) ||
      airport.name.toLowerCase().includes(searchText.toLowerCase())
  );

export default { searchCityAutocomplete, autocompleteListInitialState };
