import React from 'react';
import Stopwatch from './Stopwatch';
import './stopwatch.css';

function App() {
  return (
    <div className="mainapp">
      <div className="mainheader">
        <h1>React Stopwatch🕛</h1>
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
