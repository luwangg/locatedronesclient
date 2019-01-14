import {ScatterPlot} from 'react-d3-components';
import React from 'react';

const data1 =  [
  {
  label: 'DroneA',
  values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
  },
  {
  label: 'DroneB',
  values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
  },
  {
    label: 'DroneC',
    values: [{x: 10, y: 3}, {x: 5, y: 4}, {x: 3, y: 5}, {x: 3.5, y: 4}, {x: 1, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
    }
];

const Draw = (props) => {
  let drones = props.drones;
  
  if((drones.length) === 0 ){
    return (
      <p>Not drone selected</p>
    );
  } 
  

  const data = drones.map((drone)=>{
    return {
      values : drone.values,
      label : drone.label
    }
  });
  console.log('data=',data);
  const tooltipScatter = function(x, y) {
    return "x: " + x + " y: " + y;
  };
  return (
    //<p>pp</p>
    
    <ScatterPlot
              data={data}
              width={400}
              height={400}
              margin={{top: 10, bottom: 50, left: 50, right: 10}}
              tooltipHtml={tooltipScatter}
              maxRange = {() => Math.random() * 1000}
              xAxis={{label: "x-label"}}
              yAxis={{label: "y-label"}}/>              
  );  
}  

const Draw1 = (props) => {
  
  const tooltipScatter = function(x, y) {
    return "x: " + x + " y: " + y;
  };
  return (
    //<p>pp</p>
    
    <ScatterPlot
              data={data1}
              width={800}
              height={600}
              margin={{top: 10, bottom: 50, left: 50, right: 10}}
              tooltipHtml={tooltipScatter}
              xAxis={{label: "x-label"}}
              yAxis={{label: "y-label"}}/>              
  );  
}           


export default Draw;