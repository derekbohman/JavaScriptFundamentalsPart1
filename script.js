//Coding challenge one

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

console.log(dataOneMark), (dataOneJohn), (dataTwoMark), (dataTwoJohn);

//Console logging boolean if Mark's BMI is higher than John's

console.log(markHigherBMIOne), (markHigherBMITwo);

//Coding challenge two

//If-then statement for BMI comparison

if (dataOneMark > dataOneJohn) {
    console.log(`For data set one, Mark's BMI (${dataOneMark.toFixed(2)}) is higher than John's (${dataOneJohn.toFixed(2)}).`);
} else {
    console.log(`For data set one, John's BMI (${dataOneJohn.toFixed(2)}) is higher than Mark's (${dataOneMark.toFixed(2)}).`);
}

if (dataTwoMark > dataTwoJohn) {
    console.log(`For data set two, Mark's BMI (${dataTwoMark.toFixed(2)}) is higher than John's (${dataTwoJohn.toFixed(2)}).`);
} else {
    console.log(`For data set two, John's BMI (${dataTwoJohn.toFixed(2)}) is higher than Mark's (${dataTwoMark.toFixed(2)}).`);
}