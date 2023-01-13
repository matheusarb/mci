"use strict";
//1. First Big O Notation Paradigm --> BigO of O(n) --> LINEAR TIME to find something
//(n) is an arbitrary input. It could be any word but, as convention, we use (n) when referring to Big O notation
//O(n) - The most common Big O notation we find;

const nemo = ["nemo"];
const everyone = [
  "dory",
  "dory1",
  "dory2",
  "dory3",
  "dory4",
  "dory5",
  "dory6",
  "dory7",
  "dory8",
  "dory9",
  "nemo",
];
const largeArray = new Array(1000).fill("nemo");

function findNemo(array) {
  //let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }

  //let t1 = performance.now();

  //console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

//findNemo(largeArray);

//Little showcase of other methods to loop through arrays
function compressBox(boxes) {
  boxes.forEach(function (item) {
    console.log(item);
  });
}

const compressBox2 = (box) => {
  box.forEach((item) => console.log(item));
};

console.log(compressBox(["box1", "box2", "box3"]));
console.log(compressBox2(["1", "2", "3"]));
