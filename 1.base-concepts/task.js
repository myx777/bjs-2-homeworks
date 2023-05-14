"use strict"


function solveEquation(a, b, c) {
  const arr = [];
  const discriminat = b**2 - 4 * a * c; 
  if (discriminat === 0) {
    let x = -b / ( 2 * a );
    arr.push(x);
    return arr;
  } else if (discriminat > 0) {
    let x1 = (-b + Math.sqrt(discriminat)) / (2 * a);
    let x2 = (-b - Math.pow(discriminat, 1 / 2) )/( 2 * a);
    arr.push(x1, x2)
    return arr;
  } else { 
    return arr;
  }

};


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (Number.isFinite(+percent) && Number.isFinite(+contribution) && 
      Number.isFinite(+amount) && Number.isFinite(+countMonths)) {
    const percentInMouth = (+percent / 100) / 12;
    const bodyCredit = +amount - +contribution;
    const payment = bodyCredit * (percentInMouth + (percentInMouth / 
      ((Math.pow((1 + percentInMouth), +countMonths)) - 1)));
    const totalSumm = payment * +countMonths;
    return +totalSumm.toFixed(2);
  } else {
    return false;
  }

};