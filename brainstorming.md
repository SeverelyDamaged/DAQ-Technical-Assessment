# Brainstorming
#### Part 2
- Make an array of objects to capture the last 5-6 seconds (also account for time delay)
- If the last time added is more than 5 seconds past (check if array is not empty and that the timestamp array[0].timestamp + 5000), start counting how many occurences of exceeding temp
  - If more than 3 occurences of exceeding the temp, then add that timestamp to the log
  - Then empty the array and decrement count
- Else add the timestamp and temp to the array

#### Part 3
- Used a function to change the color to red depending on the temperature
- It works so far, but I'm still not too sure on how to not make the color white when the page is initially loaded
  - It doesn't look good when the color is initially red 

#### Part 4 
- Not too sure how to write unit tests for a TCP Server, tried looking through the testing documentation to see 
how to write tests [here](https://thomason-isaiah.medium.com/writing-integration-tests-for-websocket-servers-using-jest-and-ws-8e5c61726b2a)
- Had a look at this [link](https://stackoverflow.com/questions/54390971/integration-testing-a-node-js-socket-io-server) as well
- Maybe test to see if incident logging function works first? 

