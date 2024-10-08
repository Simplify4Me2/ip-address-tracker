import './LeafletMap.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import locationIcon from "../assets/icon-location.svg";

const customIcon = new Icon({
  iconUrl: locationIcon,
  iconSize: [50, 60],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
  
const mapContainerProps = {
    zoom: 13,
    scrollWheelZoom: true,
    zoomControl: false
}

const titleLayerProps = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

export function LeafletMap() {
    return <MapContainer {...mapContainerProps} center={[34.08057, -118.07285]} className='map' >
    <TileLayer {...titleLayerProps} />
    <Marker position={[34.07057, -118.07285]} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}