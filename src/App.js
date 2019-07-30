import React from 'react';
import './App.css';
import DisplayNameComponent from './Components/DisplayNameComponent'
import BoxContainer from './Container/BoxContainer'

function App() {
  return (
    <div className="App">
      <DisplayNameComponent></DisplayNameComponent>
      <BoxContainer></BoxContainer>
    </div>
  );
}

export default App;
