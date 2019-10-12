import React, { useState, useEffect } from 'react';
import Line from './Line';
import getCharts from '../Services/getCharts';

function Main() {
  const [charts, setCharts] = useState([
    {
      dataSetLabel: 'Loading...',
      chartData: [1, 2, 1, 0, 1, 0],
      color: 'rgb(192,192,192)'
    },
    {
      dataSetLabel: 'Loading...',
      chartData: [0, 2, 1, 2, 3, 10, 12, 1],
      color: 'rgb(192,192,192)'
    }
  ]);
  useEffect(() => {
    getCharts().then(r => setCharts(r));
  }, []);

  return (
    <div>
      {charts.map((chart, index) => (
        <Line key={index} chart={chart} />
      ))}
    </div>
  );
}

export default Main;
