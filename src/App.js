import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTabs from './SimpleTabs';

class App extends Component {
  
  render() {
    return (
      <div>
      {/* <PositionsTable/>
      <BuyModal/> */}
      <SimpleTabs/>
      </div>
    );
  }
}

export default App;
