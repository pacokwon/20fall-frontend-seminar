import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import DogsList from './components/DogsList'
import Counter from './components/Counter'
import Dogs from './components/Dogs'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <div id='header'>
      <Link to="/">HOME</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/dogs">
        <Dogs />
      </Route>
      <Route exact path="/dogslist">
        <DogsList />
      </Route>
      <Route exact path="/counter">
        <Counter />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
