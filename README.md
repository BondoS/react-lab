### Import online spreadsheets and parse their continuous time series data into charts in order to visualize and identify sudden peaks, so that a researcher can focus on important changes.

#### Currently .csv and .xlsx files are supported, A local data sets will be rendered if any error occurs during retrieving and parsing the files.

#### How peak detection threshold is calculated?

- It is a percentage of the max number available on each data set.
- Then calculating the floored number for the result percentage.
- You can edit the percentage from the .env file, but you need to rebuild the project in order to check the new results.

  #### Example

- If We configured the percentage to 80%.
- Assuming the max number in the data set is 10.
- Then we will get the number 8 as the result of the current data set threshold.

#### I used colors from [materila-ui color palatte](https://material-ui.com/customization/color/#color-palette) to randomize graphs colors.

#### Please run `npm run analyze` to analyze bundle size.
