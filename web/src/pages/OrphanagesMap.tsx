import React from 'react';
import '../styles/pages/OrphanagesMap.css';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import mapIcon from '../utils/mapIcon';

function OrphonagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Icon Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Teresina</strong>
                    <span>Piauí</span>
                </footer>
            </aside>

            <Map 
                center={[-5.0484212,-42.7804755]}
                zoom={14.04}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                 /> */}

                 <Marker
                    icon={mapIcon}
                    position={[-5.0484212,-42.7804755]}
                 
                 >
                     <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das Meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={32} color="#FFF" />
                        </Link>
                     </Popup>
                 </Marker>
            </Map>


            <Link to="/orphanages/create" className='create-orphanage'>
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphonagesMap;