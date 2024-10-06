import './LeafletMap.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// const customIcon = new L.Icon({
//     iconUrl: 'https://example.com/path-to-your-custom-marker.png', // Replace with your custom marker image URL
//     iconSize: [25, 41], // Size of the icon
//     iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
//     popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
//     shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//     shadowSize: [41, 41]
//   });
  
const mapContainerProps = {
    center: [34.08057, -118.07285],
    zoom: 13,
    scrollWheelZoom: false,
    zoomControl: false
}

const titleLayerProps = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

export function LeafletMap() {
    // const position = [34.08057, -118.07285];

    return <MapContainer {...mapContainerProps} className='map' >
    <TileLayer {...titleLayerProps} />
    {/* <Marker position={[34.07057, -118.07285]}> icon={customIcon} */}
    <Marker position={[34.07057, -118.07285]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}