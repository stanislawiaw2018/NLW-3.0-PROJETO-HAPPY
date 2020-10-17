import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
function Routers(){
    return(

        <BrowserRouter>
            {/* Switch permite a exibição de apenas uma rota em tela */}
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
                
            </Switch>

        </BrowserRouter>

       

    );
}
export default Routers;