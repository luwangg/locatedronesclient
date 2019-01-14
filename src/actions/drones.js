import axios from 'axios';

import types from './types'

const {FETCH_DRONES,ADD_DRONE,EDIT_DRONE,DELETE_DRONE} = types;

//FETCH_DRONES 
export const fetchDrones = () => dispatch => {
  console.log('fetch drones called');
  axios.get('http://localhost:3000/drones')
    .then(res => {
      console.log('response from axios GET /drones', res.data);
      dispatch({
        type : FETCH_DRONES,
        drones : res.data
      });
    })
    .catch(err => {
      console.log('error while fetching drones,',err);
    });   
}

//ADD_DRONE
export const addDrone = ({
  initalPosition_X = '0',
  initalPosition_Y = '0',
  quadrant = 1,
  name = ''  
}) => dispatch => {
  const initalPosition = {
    x : initalPosition_X,
    y : initalPosition_Y
  }
  axios.post('http://localhost:3000/drone',{initalPosition, quadrant, name})
    .then( res => dispatch({
      type : ADD_DRONE,
      drone : { 
        initalPosition,
        quadrant,
        name
      }
    })
  )};

//EDIT_DRONE
export const editDrone = (droneId,update) => dispatch => {
  axios.patch(`http://localhost:3000/drone/${droneId}`)
    .then( res => dispatch({
      type : EDIT_DRONE,
      droneId,
      update
    })
  )}

//DELETE_DRONE 
export const deleteDrone = (droneId) => dispatch => {
  axios.delete(`http://localhost:3000/drone/${droneId}`)
    .then( res => dispatch({
      type : DELETE_DRONE,
      droneId
    })); 
};

