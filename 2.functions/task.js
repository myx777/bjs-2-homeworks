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
  const sum = arr.reduce((summ, item) => summ + item, 0);
  return sum;
};

function differenceMaxMinWorker(...arr) {
  let differentNumber;
  (arr.length > 0) ? differentNumber = Math.max(...arr) - Math.min(...arr) : differentNumber = 0;
  return differentNumber;
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length != 0) {
    for (let num of arr) {
      if (num % 2 === 0) {
        sumEvenElement += num;
      } else if (num % 2 === 1) {
        sumOddElement += num;
      }

    };

  } else {
    return 0;
  }

  return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }

    };

  }

  return sumEvenElement / countEvenElement;
};

function makeWork (arrOfArr, func) {

}
