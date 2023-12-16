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

