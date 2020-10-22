import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanagesDetails';

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>

                {/* ROTA PARA ACESSAR A TELA DE ORFANATOS */}
                <Screen 
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                 />

                {/* ROTA PARA ACESSAR A TELA DE DETALAHES DO ORFANATO */}
                <Screen 
                    name="OrphanageDetails"
                    component={OrphanagesDetails}
                 />
            </Navigator>
        </NavigationContainer>
    )
}