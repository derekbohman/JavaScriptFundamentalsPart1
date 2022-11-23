//Initial data for BMI calculations

const markWeightOne = 78, markHeightOne = 1.69;
const markWeightTwo = 95, markHeightTwo = 1.88;
const johnWeightOne = 92, johnHeightOne = 1.95;
const johnWeightTwo = 85, johnHeightTwo = 1.76;

//BMI calculations

const dataOneMark = (markWeightOne / markHeightOne ** 2);
const dataOneJohn = (johnWeightOne / johnHeightOne ** 2);
const dataTwoMark = (markWeightTwo / markHeightTwo ** 2);
const dataTwoJohn = (johnWeightTwo / johnHeightTwo ** 2);

//Calculations for determining if Mark is higher

const markHigherBMIOne = dataOneMark > dataOneJohn;
const markHigherBMITwo = dataTwoMark > dataTwoJohn;

//Console logging final BMI for each data set

console.log(dataOneMark);
console.log(dataOneJohn);
console.log(dataTwoMark);
console.log(dataTwoJohn);

//Console logging boolean if Mark's BMI is higher than John's

console.log(markHigherBMIOne);
console.log(markHigherBMITwo);
