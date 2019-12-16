import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import CityTours from './components/City-Tours/City-Tours' ;

class App extends Component {
  render() {
    return (
      
     <Fragment> 
        <Navbar />
        <CityTours />
      </Fragment>

    );
  }
}

export default App;
