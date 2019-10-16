import csv from '../utils/spreedSheets/csv';
// import xlsx from '../utils/spreedSheets/xlsx';
import calcThreshold from '../utils/getThreshold';

export default async function() {
  return await csv(
    `https://docs.google.com/spreadsheets/d/e/2PACX-1vTOLa7GDMYPChB9ZwTP3XexYz8VrnDWQWDwtt_PEnaHCOME3YDPME3cb9k2x4MMWgBDfbmKPAv3WZCc/pub?output=csv`
  )
    .then(r => {
      return withThreshold(r);
    })
    .catch(r => console.log(r));

  // TODO: enable premium feature to read xlsx files
  // xlsx(
  //   `https://docs.google.com/spreadsheets/d/e/2PACX-1vQgOcBHZw1doMOLYaTAlG4V4MnS26pbQYbET5ygUavmGIz23Q6yDD7RFbxgYxNMFw/pub?output=xlsx`
  // )
  //   .then(r => console.log('xlsx', r))
  //   .catch(r => console.log(r));
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
