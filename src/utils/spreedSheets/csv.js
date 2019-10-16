import call from '../api/call';
import colors from './colors';
import data from '../../utils/data';

export default url => {
  return call(url, {}, 'text')
    .then(r => {
      return r
        .split('\n')
        .splice(1, r.length)
        .map((item, index) => {
          return {
            dataSetLabel: `Series ${index + 1}`,
            chartData: item.split(','),
            color: colors(Math.floor(Math.random() * 10))
          };
        });
    })
    .catch(r => {
      console.log(r);
      return data;
    });
};
