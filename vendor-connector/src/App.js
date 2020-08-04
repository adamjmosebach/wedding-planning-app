import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import CreateForm from './CreateForm';
import Reviews from './Reviews';
import SpecificVendor from './SpecificVendor';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/create'>
          <CreateForm />
        </Route>
        <Route path='/reviews'>
          <Reviews />
        </Route>
        <Route path='/SpecificVendor'>
          <SpecificVendor />
        </Route>
      </main>
    </div>
  );
}

export default App;
