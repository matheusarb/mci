"use strict";

//2. Second BigO Notation Paradigm - BigO of O(1) --> Constant Time (Flat line)
//O(1) is one of the best BigO paradigms. Very Scalable and performatic

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(array) {
  let t0 = performance.now();

  console.log(array[0]);
  console.log(array[1]);

  let t1 = performance.now();

  console.log("The operation took " + (t1 - t0));
}

logFirstTwoBoxes(boxes);
