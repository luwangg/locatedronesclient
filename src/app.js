import './styles/style.scss';
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './reducers'; 
import DroneHome from './components/DroneHome';

const jsx = (
  <Provider store={store}>
    <DroneHome/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

