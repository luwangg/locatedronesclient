import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {deleteDrone} from '../actions/drones';

const DroneItem = ({droneId,name,currentPosition,initalPosition,quadrant,dispatch})=>{
  const linkPage = `/drone/edit/${droneId}`;  
  const isDroneWithinQuadrant = (quadrant,{x,y}) => {    
    switch(quadrant){
      case 1 :         
        return ((x > 0 && y > 0) ? true : false);      
      case 2 : 
        return ((x < 0 && y > 0) ? true : false);        
      case 3 : 
        return ((x < 0 && y < 0) ? true : false);
      case 4 : 
        return ((x > 0 && y < 0) ? true : false);
      default : 
        return false
    }
  }
  return (    
    <div>
      <Link to={linkPage}>{<div className="tableItem">{name}</div>}</Link>      
      <div className="tableItem">{quadrant}</div>
      <div className="tableItem">{`(${initalPosition.x},${initalPosition.y})`}</div>
      <div className="tableItem">{`(${currentPosition.x},${currentPosition.y})`}</div> 
      <div className="tableItem">{!isDroneWithinQuadrant(quadrant,currentPosition) && <div className='warning'>Moved outside</div>}</div>     
      <div className="tableItem">
        <button key={droneId} onClick={(e)=>{dispatch(deleteDrone(droneId))}}>Remove</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter : state.filter
  }
}

export default connect(mapStateToProps)(DroneItem);


