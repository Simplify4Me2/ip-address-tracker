import "./LeafletMap.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import locationIcon from "../assets/icon-location.svg";
import { useEffect } from "react";

const customIcon = new Icon({
  iconUrl: locationIcon,
  iconSize: [50, 60],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const mapContainerProps = {
  zoom: 13,
  scrollWheelZoom: true,
  zoomControl: false,
};

const titleLayerProps = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

interface ILeafletMapProps {
  latitude?: number;
  longitude?: number;
}

function UpdateMapCenter({ latitude, longitude }: ILeafletMapProps) {
  const map = useMap();

  useEffect(() => {
    if (latitude && longitude) {
      const newCoordinates: LatLngExpression = [latitude, longitude];
      map.setView(newCoordinates);
    }
  }, [latitude, longitude, map]);

  return null;
}

export function LeafletMap({ latitude, longitude }: ILeafletMapProps) {
  const defaultCoordinates: LatLngExpression = [34.08057, -118.07285];
  const coordinates: LatLngExpression = [
    latitude || defaultCoordinates[0],
    longitude || defaultCoordinates[1],
  ];

  return (
    <MapContainer
      {...mapContainerProps}
      center={[51.0337, 4.4795]}
      className="map"
    >
      <TileLayer {...titleLayerProps} />
      <UpdateMapCenter latitude={latitude} longitude={longitude} />
      <Marker position={coordinates} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
