//BIG O 4 rules

//Rule 1: Worst Case;
// when calculating bigO, we always think about the worst case

//Rule 2: Remove Constants;
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  let middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}

//Rule 3: Different terms for input;
// O(a + b)

//Rule 4: Drop Non Dominant

const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);
