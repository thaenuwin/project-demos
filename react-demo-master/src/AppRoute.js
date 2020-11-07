import React from 'react';
import {BrowserRouter,Switch,withRouter,Route,Link} from 'react-router-dom';
import * as route from './features/config/route.config'
import FoodMenuContainer from './features/home/container/foodMenuContainer';

const AppRoute=(props)=>{
    return(
        <BrowserRouter>
        <Switch>
            {/* <Route path={route.home} component={FoodMenuContainer} /> */}
        </Switch>
        </BrowserRouter>
    )
}

export default AppRoute;
