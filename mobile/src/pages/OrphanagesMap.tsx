import React, {  useState } from 'react';
import { Dimensions, StyleSheet ,Text,  View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';



import {Feather} from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';


// DEFINIÇÃO DOS TIPOS DE DADOS QUE SERÃO UTILIZADOS DENTRO DO MEU ESTADO
interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;

}

export default function OrphanagesMap(){
    
    // ESTADOS
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);


    const navigation = useNavigation();
    
    //CHAMADA DA API
    useFocusEffect(() => {
      api.get('orphanages').then(response => {
        setOrphanages(response.data);
        // console.log(response.data);
      });
    });

    function handleNavigateToOrphanageDetails(id : number){
        navigation.navigate('OrphanageDetails', { id});
    }

    function handleNavigateToCreateOrphanage(){
        navigation.navigate('SelectMapPosition')
    }

    return(
        <View style={styles.container}>

        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -5.1168737,
            longitude: -42.7564573,
            latitudeDelta: 0.025,
            longitudeDelta: 0.025,
          }}
          >

            {orphanages.map(orphanage => {
              return(
                <Marker
                  key={orphanage.id}
                  icon={mapMarker}
                  calloutAnchor={{
                    x: 3.0,
                    y: 0.8,
                  }}
                  coordinate={{
                    latitude: orphanage.latitude,
                    longitude: orphanage.longitude,
                  }}
                >
                  {/* POUPAP */}
                  <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                    <View style={styles.calloutContainer}>
                      <Text style={styles.calloutText}>{orphanage.name}</Text>

                    </View>
                  </Callout>

                </Marker>
              )
            })}

          </MapView>
            
          <View style={styles.footer}>

            <Text style={styles.footerText}>{orphanages.length} Orfanatos encontrados</Text>
            <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
              <Feather name="plus" size={20} color="#FFF"/>
            </RectButton>

          </View>

      {/* <StatusBar style="dark" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    calloutContainer:{
      width: 180,
      height:46,
      paddingHorizontal:16,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      // elevation:3,
  
    },
  
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      // fontWeight: 'bold',
      fontFamily: 'Nunito_800ExtraBold',
      
    },
  
    footer:{
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft:24,
  
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 3,
  
    },
  
    footerText: {
      color: '#8fa7b3',
      fontFamily: 'Nunito_700Bold',
      // fontWeight: 'bold',
    },
  
    createOrphanageButton:{
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    }
    
});
  