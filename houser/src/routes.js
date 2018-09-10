import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/login';
import Dashboard from './Components/Dashboard/dashboard';
import Wizard1 from './Components/Wizard1/w1';
import Wizard2 from './Components/Wizard2/w2';
import Wizard3 from './Components/Wizard3/w3';
import Wizard4 from './Components/Wizard4/w4';
import Wizard5 from './Components/Wizard5/w5';


export default(
    <Switch>
        <Route component={Login} path="/"/>
        <Route component={Dashboard} path="/dashboard"/>
        <Route component={Wizard1} path="/wizard/1"/>
        <Route component={Wizard2} path="/wizard/2"/>
        <Route component={Wizard3} path="/wizard/3"/>
        <Route component={Wizard4} path="/wizard/4"/>
        <Route component={Wizard5} path="/wizard/5"/>
    </Switch>
)