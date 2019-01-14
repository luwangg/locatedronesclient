import React from 'react';
import {connect} from 'react-redux';
import openSocket from 'socket.io-client';

import DroneItem from './DroneItem';
import DroneItemHeader from './DroneItemHeader';
import {getVisibleDrones} from './../selectors/selector';

export default class DroneList extends React.Component {
  state = {
    drones : [],
    socket : openSocket('http://localhost:3000')
  }
  dronesPosition = (nextPosition) => {
    //console.log('nextPosition.dronesPosition', nextPosition);    
    return nextPosition.dronesPosition.map((drone)=>{
      return {
        name : drone.name,
        quadrant : drone.quadrant,
        droneId : drone.droneId,
        currentPosition : drone.currentPosition,
        initalPosition : drone.initalPosition
      }
    });
  }
  componentDidMount = () => {
    this.state.socket.on('nextPosition',(nextPosition)=>{
      //console.log('nextPosition received=',nextPosition);      
      this.setState(() => ({drones : this.dronesPosition(nextPosition)}));
    });
  }
  
  render() {
    console.log('drone state',this.state.drones);
    return (
      <div>      
        <div className="listTitle">Drone List</div>
        <DroneItemHeader/>             
        {this.state.drones.map( drone => { 
          console.log('drone list',drone);            
          return (
            <div key={drone.droneId}>
              <DroneItem key={drone.droneId} {...drone} />
            </div>
            );
         })}
      </div>
    ); 
  }
}
