import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanagesDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';


export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false , cardStyle: {backgroundColor: '#f2f3f5'}}}>

                {/* ROTA PARA ACESSAR A TELA DE ORFANATOS */}
                <Screen 
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                 />

                {/* ROTA PARA ACESSAR A TELA DE DETALAHES DO ORFANATO */}
                <Screen 
                    name="OrphanageDetails"
                    component={OrphanagesDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato"/>
                    }}
                 />
                {/* ROTA PARA ACESSAR A TELA DE POSICIONAMENTO DO ORFANATO MO MAPA */}

                <Screen 
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione um ponto no mapa"/>
                    }}
                 />

                {/* ROTA PARA ACESSAR A TELA DE DETALAHES DO ORFANATO */}

                <Screen 
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados"/>
                    }}
                 />
            </Navigator>
        </NavigationContainer>
    )
}