import fetch from 'unfetch';

export default async function reqCall(url, data, type) {
  const res = await fetch(url, data)
    .then(r => {
      switch (type) {
        case 'text':
          return r.text();
        case 'blob':
          return r.blob();
        case 'arrayBuffer':
          return r.arrayBuffer();
        default:
          return r.json();
      }
    })
    .then(resData => resData)
    .catch(err => {
      // error from api call
      if (typeof err.response !== 'undefined') {
        if (err.response.status === 500) {
          throw new Error('Interval server error! Try again!');
        } else {
          throw new Error(err.response.status);
        }
      }
      // other errors
      throw new Error(err);
    });
  return res;
}
