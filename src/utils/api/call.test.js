import call from './call';

describe('#getCSV data using Promises', () => {
  it('should load csv file data', () => {
    return call(
      `https://docs.google.com/spreadsheets/d/e/2PACX-1vTOLa7GDMYPChB9ZwTP3XexYz8VrnDWQWDwtt_PEnaHCOME3YDPME3cb9k2x4MMWgBDfbmKPAv3WZCc/pub?output=csv`,
      {},
      'text'
    ).then(r => {
      expect(r).toBeDefined();
      expect(Array.isArray(r.split('\n'))).toBe(true);
    });
  });
});
