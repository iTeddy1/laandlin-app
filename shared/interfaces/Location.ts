import { LatLngTuple } from "leaflet";

export type Location = {
  _id?: string;
  address: string;
  position: LatLngTuple;
  url: string;
  __v?: number;
};

export type LocationRequest = {
  address: string;
  position: LatLngTuple;
  url: string;
};
