import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from '../src/pages/homepage'

import ShopPage from './pages/shop/shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
