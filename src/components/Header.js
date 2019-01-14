import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <p>Drone Locator APP</p>
    <ul>
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> </li>
      <li><NavLink to="/drone/add" activeClassName="is-active" exact={true}>Add Drone</NavLink></li>   
      <li><NavLink to="/drone/add" activeClassName="is-active" exact={true}>Edit Drone</NavLink></li>
      <li><NavLink to="/drones" activeClassName="is-active" exact={true}>List Drones</NavLink> </li>
    </ul>
       
         
  </header>
);

export default Header;
