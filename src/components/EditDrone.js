import React from 'react';
import {connect} from 'react-redux';

import DroneForm from './DroneForm';
import {editDrone} from '../actions/drones';

const EditDrone = (props) => {  
  return (  
  <div>
    <h1>Edit Drone</h1>
    <DroneForm drone={props.drone} onSubmit={(drone) => {props.dispatch(editDrone(props.drone.droneId,drone)); props.history.push('/');} }/>
  </div>
  );
}

const mapStateToProps = (state,props) => {
  return {
    drone : state.drones.find((drone) => drone.droneId === props.match.params.droneId)
  }
}

export default connect(mapStateToProps)(EditDrone);