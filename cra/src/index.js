import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import DogsList from './components/DogsList'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/dogs">
        <DogsList />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
