Reading excel sheets and drawing a graph

How Peak detection threshold get calculated?

- It is a percentage of the max number available on each data set.
- Then I get the floored number for the result percentage.
- You can edit the percentage from the .env file, but you need to rebuild the project in order to check the new results.

Example

- If We configured the percentage to 80%
- Assuming the max number in the data set is 10
- Then we will get the number 8 as the result of the current set threshold
