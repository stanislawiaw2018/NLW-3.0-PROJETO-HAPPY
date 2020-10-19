
import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    //posicionamento do icone no mapa
    iconAnchor: [29, 68],
    // posicionamneto do popup no mapa
    popupAnchor: [170, 2]
  })

  export default mapIcon;