import React, { useState, useEffect } from 'react';
import Series from '../Series/Series';
import getCharts from '../../services/getCharts';
import calcThreshold from '../../utils/get-threshold';
import classes from './Main.module.scss';

function Main() {
  const [charts, setCharts] = useState([
    {
      dataSetLabel: 'Loading...',
      chartData: [1, 2, 1, 0, 1, 0],
      peaks: [1, 2, 1, 0, 1, 0],
      color: 'rgb(192,192,192)'
    },
    {
      dataSetLabel: 'Loading...',
      chartData: [0, 2, 1, 2, 3, 10, 12, 1],
      peaks: [0, 2, 1, 2, 3, 10, 12, 1],
      color: 'rgb(192,192,192)'
    }
  ]);
  useEffect(() => {
    getCharts().then(r => {
      const withThreshold = r.map((_, index) => {
        const threshold = calcThreshold(r[index].chartData);
        const peaks = r[index].chartData.map(item =>
          item >= threshold ? 1 : 0
        );
        return {
          ...r[index],
          threshold,
          peaks
        };
      });
      setCharts(withThreshold);
    });
  }, []);

  return (
    <div className={classes.main}>
      {charts.map((chart, index) => (
        <Series key={index} chart={chart} />
      ))}
    </div>
  );
}

export default Main;
