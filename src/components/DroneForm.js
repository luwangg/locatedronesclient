import React from 'react';

export default class DroneForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state= {
      name : props.drone ? props.drone.name : '',
      quadrant : props.drone ? props.drone.quadrant : '' ,
      initalPosition_X : props.drone ? props.drone.initalPosition.x : '',
      initalPosition_Y : props.drone ? props.drone.initalPosition.y : ''           
    }   
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(()=>({name}));
  }
  onQuadrantChange = (e) => {
    const quadrant = e.target.value;
    this.setState(()=>({quadrant}));
  }
  onInitalPosition_XChange = (e) => {
    const initalPosition_X = e.target.value;
    this.setState(()=>({initalPosition_X}));
  }
  onInitalPosition_YChange = (e) => {
    const initalPosition_Y = e.target.value;
    this.setState(()=>({initalPosition_Y}));
  }    
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
  }
  render = () => {     
    return (
      <div>
        <form  onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input type="text" value={this.state.name} onChange={this.onNameChange}/></td>
              </tr>
              <tr>
                <td>Quadrant</td>
                <td><input type="text" value={this.state.quadrant} onChange={this.onQuadrantChange}/></td>
              </tr>
              <tr>
                <td>Inital Position : X</td>
                <td><input type="text" value={this.state.initalPosition_X} onChange={this.onInitalPosition_XChange}/></td>
              </tr>
              <tr>
                <td>Inital Position : Y</td>
                <td><input type="text" value={this.state.initalPosition_Y} onChange={this.onInitalPosition_YChange}/></td>
              </tr>              
              <tr>
                <td>
                  <button>Add Drone</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }  
}