import React from 'react';
import {connect} from 'react-redux';

import DroneForm from './DroneForm';
import {addDrone} from '../actions/drones';

const AddDrone = (props) => {  
  return (  
  <div>
    <h1>Add Drone</h1>
    <DroneForm onSubmit={(drones) => {props.dispatch(addDrone(drones)); props.history.push('/');} }/>
  </div>
  );
}

export default connect()(AddDrone);