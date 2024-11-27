import React from 'react';
import './App.css';
import HighlightText from './HighlightText';
import Icon from './Icon';


function App() {
  return (
    <div className="App">
      <p>Hi world</p>
      <HighlightText color="red" />
      <Icon bgImg="URL(./icon.png)" />
    </div>

  );
}

export default App;
