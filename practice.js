/* Are You Playing Banjo? - 8 kyu (Nov.12.2023) 

Instructions:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/

/* solution logic:
1. Make the first letter of the name lowercase
2. Use === comparison to check if the name[0] letter is "r"
*/

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Elijah")); // Elijah does not play banjo
console.log(areYouPlayingBanjo("Robert")); // Robert plays banjo

/* Convert a Boolean to a String? - 8 kyu (Nov.12.2023) 

Instructions:

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

/* solution logic:
1. It's a test about type coercion
2. Only true/false will be considered valid input, so we can just use toString() to convert the given boolean value into its string representation
*/

function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(true)); // true
console.log(booleanToString(false)); // false

/* Sum of positive - 8 kyu (Nov.13.2023) 

Instructions:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

/* solution logic:
1. Use array method filter() to filter out the positive number
2. Use reduce to sum the positive numbers
3. return the result
*/

let numArray = [234, -123, 0, 234, 456, 1, 7, 234, -20];

function positiveSum(arr) {
  let positiveNum = arr.filter((num) => num > 0);
  let result = positiveNum.reduce((acc, num) => acc + num, 0);
  return result;
}

console.log(positiveSum(numArray)); // 1166


/* A Needle in the Haystack - 8 kyu (Nov.13.2023) 

Instructions:

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/


/* solution logic:
1. Use array method indexOf() to find the index of needle
2. return string + the index result of the needle 
*/

let  haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

function findNeedle(haystack) {
  let IndexOfNeedle = haystack.indexOf('needle');
  return `found the needle at position ${IndexOfNeedle}`
}

console.log(findNeedle(haystack)); // found the needle at position 5
