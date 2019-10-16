import csv from '../utils/spreedSheets/csv';
import xlsx from '../utils/spreedSheets/xlsx';
import calcThreshold from '../utils/getThreshold';

export default async function(url) {
  // get file type
  const type = url.split('=').pop();

  if (type === 'xlsx') {
    return await xlsx(url)
      .then(r => {
        return withThreshold(r);
      })
      .catch(r => console.log(r));
  } else {
    return await csv(url)
      .then(r => {
        return withThreshold(r);
      })
      .catch(r => console.log(r));
  }
}

const withThreshold = series => {
  return series.map((_, index) => {
    const threshold = calcThreshold(series[index].chartData);
    const peaks = series[index].chartData.map(item =>
      item >= threshold ? 1 : 0
    );
    return {
      ...series[index],
      threshold,
      peaks
    };
  });
};
