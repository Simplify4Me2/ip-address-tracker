export interface IPData {
  ip: string;
  location: Location;
  isp: string;
}

export interface Location {
  country: string;
  region: string;
  timezone: string;
  lat: number;
  lng: number;
}
