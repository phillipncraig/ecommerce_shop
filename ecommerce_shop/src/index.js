import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import { Switch, Link, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// const inventoryList = [
//   {}
// ]

ReactDOM.render(
<Router>
  <App /> 
</Router>,
document.getElementById('root'));
registerServiceWorker();
