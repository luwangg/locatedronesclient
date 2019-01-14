import React from 'react';

const DroneItemHeader = ()=>{
  return (
    <div>
      <div className="tableItem title">Name</div>
      <div className="tableItem title">Quadrant</div>
      <div className="tableItem title">Initial Position</div>
      <div className="tableItem title">Current Position</div> 
      <div className="tableItem title">Warning</div>      
    </div>
  )
}

export default DroneItemHeader;