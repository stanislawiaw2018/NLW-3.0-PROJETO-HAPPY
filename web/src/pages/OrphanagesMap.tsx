import React from 'react';
import '../styles/pages/OrphanagesMap.css';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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
            </Map>


            <Link to='' className='create-orphanage'>
                <FiPlus size={32} color='#fff' />
            </Link>
        </div>
    );
}

export default OrphonagesMap;