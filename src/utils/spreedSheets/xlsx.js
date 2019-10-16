import call from '../api/call';
import XLSX from 'xlsx';
import colors from './colors';
import data from '../../utils/data';

export default url => {
  return call(url, { responseType: 'arraybuffer' }, 'arrayBuffer')
    .then(function(ab) {
      /* parse the data when it is received */
      var data = new Uint8Array(ab);
      var wb = XLSX.read(data, { type: 'array' });
      return wb.sheets[0].splice(1, wb.sheets[0].length).map((item, index) => {
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
