import React from 'react';
import { Line } from 'react-chartjs-2';

function labLine(props) {
  const { dataSetLabel, chartData, color } = props.chart;
  const chartLabels = [...Array(chartData.length).keys()];
  const backgroundColorAlpha = '0.2';
  const borderColorAlpha = '1';
  return (
    <div>
      <Line
        data={{
          labels: chartLabels,
          datasets: [
            {
              label: dataSetLabel,
              data: chartData,
              backgroundColor: [
                color
                  .replace(')', `, ${backgroundColorAlpha})`)
                  .replace('rgb', 'rgba')
              ],
              borderColor: [
                color
                  .replace(')', `, ${borderColorAlpha})`)
                  .replace('rgb', 'rgba')
              ],
              borderWidth: 2,
              lineTension: 0.2
            }
          ]
        }}
        width={200}
        height={50}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMin: 0,
                  suggestedMax: 20
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}

export default labLine;
