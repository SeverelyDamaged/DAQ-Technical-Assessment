# Brainstorming
#### Part 2
- Make an array of objects to capture the last 5-6 seconds (also account for time delay)
- If the last time added is more than 5 seconds past (check if array is not empty and that the timestamp array[0].timestamp + 5000), start counting how many occurences of exceeding temp
  - If more than 3 occurences of exceeding the temp, then add that timestamp to the log
  - Then empty the array and decrement count
- Else add the timestamp and temp to the array
