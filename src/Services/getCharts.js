export default async function() {
  // mock api calling
  await new Promise(resolve => setTimeout(resolve, 2500));
  // prettier-ignore
  const res = [
    {
      dataSetLabel: "Series 1",
      chartData: [1, 2, 1, 0, 1, 2, 1, 8, 9, 8, 1, 2, 0, 2, 1, 2, 3, 1, 2, 0, 8, 9, 2, 0, 3, 0, 2, 1, 2, 3, 8, 10, 2, 1, 2, 3, 0, 1, 2, 1, 2, 7, 6, 9, 1, 2, 0, 1, 2, 1],
      color: 'rgb(54, 162, 235)'
    },
    {
      dataSetLabel: "Series 2",
      chartData: [0, 2, 1, 2, 3, 10, 12, 1, 1, 2, 3, 0, 1, 2, 1, 2, 7, 6, 9, 1, 2, 0, 1, 2, 1, 2, 1, 3, 0, 2, 3, 1, 1, 2, 3, 10, 9, 12, 0, 2, 3, 1, 2, 0, 1, 7, 11, 0, 1, 2],
      color: 'rgb(238, 46, 46)'

    },
    {
      dataSetLabel: "Series 3",
      chartData: [2, 1, 3, 0, 2, 2, 9, 7, 2, 3, 1, 2, 9, 8, 2, 3, 1, 2, 0, 1, 2, 3, 0, 10, 9, 1, 2, 1, 0, 1, 2, 1, 8, 9, 8, 1, 2, 0, 2, 1, 2, 1, 14, 10, 0, 1, 1, 2, 0, 3],
      color: 'rgb(255, 217, 102)'    
    }
  ];
  return res;
}
