/*
--- Day 3: Perfectly Spherical Houses in a Vacuum ---
Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.

However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once.

For example:

(1) > delivers presents to 2 houses: one at the starting location, and one to the east.
(2) ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
(3) ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.



Question 1: How many houses receive at least one present?

Notes:
(1) north (^), south (v), east (>), or west (<)

Plan:
1. Initialize coordinates (x, y) +1 (Where the Santa started would already have 1 gift), and use x++, x--, y++, y-- to navigate through locations.
2. If the location returns to (0, 0), mark the house as having at least one gift; otherwise, increment the gift count for that house.
3. Calculate the sum to determine the total number of houses that received at least one gift from Santa.
*/

const fs = require("fs");

fs.readFile("./directions.txt", (err, res) => {
  if (err) {
    console.log("ERROR MESSAGE: ", err);
    return;
  }
  const directions = res.toString();

  function countHouse(directions) {
    let x = 0;
    let y = 0;

    let houses = {};

    houses[`${x},${y}`] = 1;

    for (let i = 0; i < directions.length; i++) {
      let move = directions[i];

      switch (move) {
        case "^":
          y++;
          break;
        case "v":
          y--;
          break;
        case ">":
          x++;
          break;
        case "<":
          x--;
          break;
      }
      houses[`${x},${y}`] = (houses[`${x},${y}`] || 0) + 1;
    }
    let count = Object.keys(houses).length;

    return count;
  }
  console.log(countHouse(directions));
});

/*
--- Part Two ---
The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

For example:

(1) ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
(2) ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
(3) ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.

Question 2: This year, how many houses receive at least one present?

Plan:
1. Initialize the coordinates (x, y) for both Santa and Robo-Santa to (0, 0) and use the deliverPresents function to mark the starting house as receiving a gift.
2. Iterate through the given instructions, using a switch statement to handle each movement direction.
3. Based on the parity of the index i, determine whether it's Santa's or Robo-Santa's turn to move, and update the corresponding coordinates accordingly.
4. After each move, use the deliverPresents function to mark the current coordinates' house as receiving a gift.
5. Finally, return the total number of houses with at least one gift by counting the unique coordinates.
*/

fs.readFile("./directions.txt", (err, res) => {
  if (err) {
    console.log("ERROR MESSAGE: ", err);
    return;
  }
  const directions = res.toString();

  function countHousesWithPresents(directions) {
    const houses = {};
    let santa = { x: 0, y: 0 };
    let roboSanta = { x: 0, y: 0 };

    function deliverPresents(coord) {
      const key = `${coord.x},${coord.y}`;
      houses[key] = (houses[key] || 0) + 1;
    }

    deliverPresents(santa);
    deliverPresents(roboSanta);

    for (let i = 0; i < directions.length; i++) {
      const currentSanta = i % 2 === 0 ? santa : roboSanta;
      const move = directions[i];

      switch (move) {
        case "^":
          currentSanta.y++;
          break;
        case "v":
          currentSanta.y--;
          break;
        case ">":
          currentSanta.x++;
          break;
        case "<":
          currentSanta.x--;
          break;
      }

      deliverPresents(currentSanta);
    }

    return Object.keys(houses).length;
  }

  console.log(countHousesWithPresents(directions));
});
