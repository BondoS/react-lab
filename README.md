Reading excel sheets and drawing a graph

## How peak detection threshold is calculated?

- It is a percentage of the max number available on each data set.
- Then I get the floored number for the result percentage.
- You can edit the percentage from the .env file, but you need to rebuild the project in order to check the new results.

  #### Example

- If We configured the percentage to 80%
- Assuming the max number in the data set is 10
- Then we will get the number 8 as the result of the current data set threshold

### Importing spreedsheet files

- I haven't used https://www.npmjs.com/package/xlsx to parse the response for two reasons.
  - It has an extreme bundle size
  - Currently all we need is a simple parser, no need for extra library.
    ![image](https://user-images.githubusercontent.com/2457873/66717964-d3983100-edde-11e9-8fb5-8bebe10998db.png | =100x)
