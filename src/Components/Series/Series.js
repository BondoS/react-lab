import React from 'react';
import Chart from '../Chart/Chart';
import classes from './Series.module.scss';

function Series(props) {
  const { dataSetLabel, chartData, color, peaks } = props.chart;

  return [chartData, peaks].map((data, index) => {
    return (
      <div key={index} className={classes.chartContainer}>
        <Chart
          dataSetLabel={dataSetLabel}
          chartData={data}
          color={color}
          backgroundColorAlpha={index === 0 ? 0 : 0.2}
        />
      </div>
    );
  });
}

export default Series;
