import getThreshold from './getThreshold';

// prettier-ignore
it(`Generate a number that represents the threshold for a given data set,
Please keep on mind that this test will not be accurate if you changed the
threshold percentage other than 73% in .env files`, () => {
  expect(getThreshold([
    1, 2, 1, 0, 1, 2, 1, 8, 9,
    8, 1, 2, 0, 2, 1, 2, 3, 1,
    2, 0, 8, 9, 2, 0, 3, 0, 2,
    1, 2, 3, 8, 10, 2, 1, 2, 3,
    0, 1, 2, 1, 2, 7, 6, 9, 1, 2,
    0, 1, 2, 1]))
      .toEqual(7);
    expect(getThreshold([
      0, 2, 1, 2, 3, 10, 12, 1,
      1, 2, 3, 0, 1, 2, 1, 2, 7,
      6, 9, 1, 2, 0, 1, 2, 1, 2,
      1, 3, 0, 2, 3, 1, 1, 2, 3,
      10, 9, 12, 0, 2, 3, 1, 2, 0,
      1, 7, 11, 0, 1, 2]))
      .toEqual(8);

});
