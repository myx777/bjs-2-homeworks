"use strict"


function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2 - 4 * a * c; 
  if (d === 0) {
    let x = -b / ( 2 * a );
    arr.push(x);
    return arr;
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.pow(d, 1 / 2) )/( 2 * a);
    arr.push(x1, x2)
    return arr;
  } else { 
    return arr;
  }

};


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentInMouth = (percent / 100) / 12;
  const bodyCredit = amount - contribution;
  const payment = bodyCredit * (percentInMouth + (percentInMouth / 
    ((Math.pow((1 + percentInMouth), countMonths)) - 1)));
  const totalSumm = payment * countMonths;
  return +totalSumm.toFixed(2);
};