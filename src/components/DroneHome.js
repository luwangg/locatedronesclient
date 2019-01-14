import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AddDrone from './AddDrone';
import EditDrone from './EditDrone';
import DroneDashboard from './DroneDashboard';
import DroneList from './DroneList';
import Header from './Header';

const DroneHome = (props) => (  
    <BrowserRouter>
      <div>       
        <Header />        
        <Switch>
          <Route path='/' component={DroneDashboard} exact={true} />         
          <Route path='/drone/add' component={AddDrone} exact={true}/>
          <Route path='/drone/edit/:droneId' component={EditDrone} exact={true}/>
          <Route path='/drones' component={DroneList} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>   
  );


export default DroneHome;
