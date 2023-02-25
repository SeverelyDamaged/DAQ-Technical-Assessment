import React, { useState, useEffect } from 'react';
import './App.css';

interface TemperatureProps {
  temp: number;
}

function LiveValue({ temp } : TemperatureProps) {

  const [color, setColor] = useState('white');
  
  // Changes the color based on the temperature 
  useEffect(() => {
    function changeColor () {
      if (temp > 80 || temp < 20) setColor('red');
      else setColor('white');
    }
    changeColor();
  }, [temp])

  return (
      <header className="live-value" style={{color: color}}>
        {`${temp.toString()}°C`}
      </header>
  );
}

export default LiveValue;
