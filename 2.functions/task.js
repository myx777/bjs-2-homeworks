function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let avg = 0;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum= arr.reduce((accumulator, item) => accumulator + item, 0);
  avg = (sum / arr.length).toFixed(2);
  avg = +avg;
  return { min: min, max: max, avg: avg };
};



function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
