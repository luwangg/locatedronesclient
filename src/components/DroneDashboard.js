import React from 'react';

import DroneFilter from './DroneFilter';
import DroneList from './DroneList';

const DroneDashboard = (props) => (
    <div>
      <DroneFilter/>
      <DroneList/>
    </div>    
  )

export default DroneDashboard;