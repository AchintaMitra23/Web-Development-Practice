/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';

let Stopwatch = () => {
  const [isRunning, setRunning] = useState (false);
  const [elapsedTime, setElapsedTime] = useState (0);
  const intervalIDRef = useRef (null);
  const startTimeRef = useRef (0);

  useEffect (
    () => {
      if (isRunning) {
        intervalIDRef.current = setInterval (() => {
          setElapsedTime (Date.now () - startTimeRef.current);
        }, 10);
      }
      return () => {
        clearInterval (intervalIDRef.current);
      };
    },
    [isRunning]
  );

  let start = () => {
    setRunning (true);
    startTimeRef.current = Date.now () - elapsedTime;
  };

  let stop = () => {
    setRunning (false);
  };

  let reset = () => {
    setRunning (false);
    setElapsedTime (0);
  };

  let formatTime = () => {
    let hr = Math.floor (elapsedTime / (1000 * 60 * 60));
    let min = Math.floor (elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor (elapsedTime / 1000 % 60);
    let msec = Math.floor (elapsedTime % 1000 / 10);

    return `${padZero (hr)}:${padZero (min)}:${padZero (sec)}:${padZero (msec)}`;
  };

  let padZero = num => {
    return num < 10 ? '0' + num : '' + num;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime ()}</div>
      <div className="controls">
        <button className="start-btn" onClick={() => start ()}>
          Start
        </button>
        <button className="stop-btn" onClick={() => stop ()}>
          Stop
        </button>
        <button className="reset-btn" onClick={() => reset ()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
