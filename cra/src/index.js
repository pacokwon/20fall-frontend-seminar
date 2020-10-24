import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import DogsList from './components/DogsList'
import Counter from './components/Counter'

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
      <Route exact path="/counter">
        <Counter />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
