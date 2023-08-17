import React, { useState, useEffect } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStopClick = () => {
    setRunning(prevRunning => !prevRunning);
  };

  const handleResetClick = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button className='btn1' onClick={handleStartStopClick}>{running ? 'Stop' : 'Start'}</button>
        <button className='btn2' onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
