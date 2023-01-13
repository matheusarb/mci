"use strict";
//What is the BigO of the below function?
//(Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10; //O(1) this runs only one time
  a = 50 + 3; //O(1) this runs only one time

  for (let i = 0; i < input.length; i++) {
    //O(n) this loop will run n times, as long as 'i' is smaller than the length of the  input
    anotherFunction(); //O(n) will be run accordingly to how big our input is. So, again, O(n)
    let stranger = true; //O(n) this will run as many times as the loop happens
    a++; //O(n) this will increment for how many times the loop occurs
  }

  return a; //O(1) the return will run only one
}

funChallenge([1, 2, 3]);

// ANSWER: BigO(3 + 4n);
