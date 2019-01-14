import types from '../actions/types'

const {ADD_DRONE,EDIT_DRONE,DELETE_DRONE,FETCH_DRONES} = types;
const defaultDronesState = []

export const droneReducer = (state = defaultDronesState, action={}) => {
  switch(action.type){
    case ADD_DRONE :
      return [...state, action.drone];
    case EDIT_DRONE :
      return state.map((drone) => {
        if(drone.droneId === action.droneId){
          return {...drone, ...action.update}
        } 
        return drone;
      });
    case DELETE_DRONE :
      return state.filter((drone) => drone.droneId !== action.droneId );
    case FETCH_DRONES :      
      return action.drones;
    default : 
      return state;
  }
}