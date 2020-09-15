/** @format */

import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { connect } from 'react-redux';

function App() {
  return (
    <div className='App'>
      <Nav />
      {routes}
    </div>
  );
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
