import React from 'react';
import './App.css';
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Options from './components/Options'

function App() {
  return (
    <div className="App" id="principal">
      <Title/>
      <Subtitle/>
      <Options/>
    </div>
  );
}

export default App;
