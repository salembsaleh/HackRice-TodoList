import React, { useState, useEffect } from 'react';
import './TimerWidget.css';

const TimerWidget = ({ removeWidget }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const calculateProgress = () => {
    return ((totalTime - timeLeft) / totalTime) * 100;
  };

  return (
    <div className="Widget TimerWidget">
      <h2>Timer</h2>
      <div className="controls">
        <label htmlFor="timerLength">Timer Length (in seconds):</label>
        <input
          type="number"
          id="timerLength"
          value={totalTime}
          onChange={(e) => setTotalTime(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="progress-container">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring-circle"
            stroke="#007BFF"
            strokeWidth="8"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"
            style={{ strokeDasharray: '326', strokeDashoffset: `${326 - calculateProgress() * 3.26}px` }}
          />
        </svg>
        <div className="progress-text">{formatTime(timeLeft)}</div>
      </div>
      <div className="controls">
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={() => setTimeLeft(totalTime)}>Reset</button>
        <button onClick={removeWidget} className="removeButton">
          Remove Timer
        </button>
      </div>
    </div>
  );
};

export default TimerWidget;
