/*
Question 1: To which floor do the instructions take Santa?

Notes:
(1) '(' ---> Go up 1 floor
(2) ')' ---> Go down 1 floor

Plan:
1. Read the .txt file
2. Convert it to an array so we can perform conditional calculations
3. Get the sum
*/

const fs = require("fs");

fs.readFile("./santa.txt", (err, res) => {
  if (err) {
    console.log("ERROR MESSAGE: ", err);
  }

  const data = res.toString();
  const dataArray = [...data];
  const floor = dataArray.reduce((acc, cv) => {
    if (cv === "(") {
      acc += 1;
    } else if (cv === ")") {
      acc -= 1;
    }
    return acc;
  }, 0);
  console.log("Santa is at: ", floor);
});



/*
Question 2: What is the position of the character that causes Santa to first enter the basement?

Notes:
(1) '(' ---> Go up 1 floor
(2) ')' ---> Go down 1 floor

Plan:
1. Read the .txt file
2. Convert it to an array so we can perform conditional calculations
3. Loop through the array and stop when it hits the condition
4. Set a counter to know when does the loop stop
*/

fs.readFile("./santa.txt", (err, res) => {
  if (err) {
    console.log("ERROR MESSAGE: ", err);
  }

  const data = res.toString();
  const dataArray = [...data];
  let counter = 0;
  let floor = 0;
  dataArray.some((cv) => {
    if (cv === "(") {
      floor += 1;
    } else if (cv === ")") {
      floor -= 1;
    }
    counter++;
    return floor === -1;
  });
  console.log("Basement entered at: ", counter);
});
