/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

let DigitalClock = () => {
  const [time, setTime] = useState (new Date ());

  useEffect (() => {
    const intervalId = setInterval (() => {
      setTime (new Date ());
    }, 1000);

    return () => {
      clearInterval (intervalId);
    };
  }, []);

  let formatTime = () => {
    let hr = time.getHours ();
    let min = time.getMinutes ();
    let sec = time.getSeconds ();
    let mer = hr >= 12 ? 'PM' : 'AM';

    hr = hr % 12 || 12;
    return `${padZero (hr)}:${padZero (min)}:${padZero (sec)} ${mer}`;
  };

  let padZero = number => {
    return (number < 10 ? '0' : '') + number;
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime ()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
