import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import CreateForm from './CreateForm'
import Reviews from './Reviews'

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
      </main>
    </div>
  );
}

export default App;
