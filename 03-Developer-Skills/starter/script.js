// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// let s = '5';

// console.log(`check the value `);
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*const calMax = function (temp) {
  let max;
  let min;
  console.log(`Current Max = ${max} and Min = ${min}`);
  for (let i = 0; i < temp.length; i++) {
    if (typeof (temp[i]) == 'number') {
      if (typeof (max) == 'undefined') {
        max = temp[i];
        min = temp[i];
      }
      if (max < temp[i]) {
        max = temp[i];
      }
      if (min > temp[i]) {
        min = temp[i];
      }
    }
  }
  console.log(`Final Max = ${max} and Min = ${min}`);
  return max - min;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures1 = [3, -2, -16, -71, 'error', 19, 13, 17, 15, 24, 91, 5];
let amp = calMax(temperatures);
console.log(`Amplitude = ${amp}`);
let temps = temperatures.concat(temperatures1);
let amp1 = calMax(temps);
console.log(`Array 2 = ${temps}`);
console.log(`Amplitude of 2 b array  = ${amp1}`);*/

//CODING CHALLENGE 1 
//Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const output = function (arr)
{
  let str = "...";
  //str = str.concat(String(23));
  for(let i = 0 ; i < arr.length ; i++)
  {
    str = str.concat(` ${arr[i]}°C in ${i+1} days ...`)
  }
  console.log(`String = ${str}`);
}

const temp = [17,21,23];
output(temp); 

