/*let js = "amazing";
//if (js == "amazing") alert('Java Script is fun ');
console.log(41 + 9 - 10 - 5);
Varible  
let name1 = 'Amartya';
console.log(name1);
console.log(name1);
console.log(name1);
let n1 = 2.14;
console.log(n1);
console.log(typeof n1);
let test = true;
console.log(typeof test);
console.log(test);
/*Dynamic Typing  
test = "true";
console.log(typeof test);
console.log(test);
/*Undefined 
let test1;
console.log(typeof test1);
console.log(test1);

console.log(typeof null);

const fname = "Amartya";
const lname = "Ghosh"
console.log(fname + " " + lname);*/
/*CODING TEST 1
const massMark = 88;
const hMark = 1.69;
const massJohn = 92;
const hJohn = 1.95;
const bmiMark = massMark / (hMark ** 2);// power of 2 
const bmiJohn = massJohn / (hJohn ** 2);
console.log("BMI Mark = ", bmiMark);
console.log("BMI John = ", bmiJohn);
console.log("BMI Mark > John = ", bmiMark > bmiJohn);*/

/*TEMPLATE LITERALS STRINGS  
const fname = "Amartya ";
const job = "Developer ";
const age = 31;
const text = "I'm " + fname + " of age " + age + " doing job as a " + job + " !";
console.log(text);
const textNew = `TEMPLATE STRINGS ES6 - I'm ${fname} of age ${age} doing job as a ${job} !`;
console.log(textNew);
console.log(`TEMPLATE STRINGS ES6 MULTI-LINE - I'm ${fname} 
of age ${age} 
doing job as a ${job} !`);*/
/*IF Else 
const age = 17;
if (age >= 18) {
    console.log(`can ride car `);
} else {
    console.log(`can't ride`);
}*/
/*CODING TEST 2
const massMark = 88;
const hMark = 1.69;
const massJohn = 92;
const hJohn = 1.05;
const bmiMark = massMark / (hMark ** 2);
const bmiJohn = massJohn / (hJohn ** 2);
console.log("BMI Mark = ", bmiMark);
console.log("BMI John = ", bmiJohn);
console.log("BMI Mark > John = ", bmiMark > bmiJohn);
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} > John's ${bmiJohn} `)
} else {
    console.log(`Mark's BMI ${bmiMark} > John's ${bmiJohn} `)
}*/
/**TYPE CONVERSION & COHERSION  
// Type conversion 
const inpYear = "1990";
console.log(inpYear);
console.log(Number(inpYear)); //See the colour diff  
console.log(Number(inpYear) + 30);
console.log(Number("John")); //NAN - Not A Number - Invalid number  
// type cohersion
console.log('ink ' + 11);
console.log('1991' + 23 + '11'); // + doesn't conver to number but other operator does that 
console.log('1991' - 23 - '11');
let n = '1' + 1;
n -= 1;
console.log(n);*/
/*TRUELY & FALEY VALUE 
const money = 0;
if (money) {
    console.log('Go out to spend');
} else {
    console.log('Get a job ');
}
let height;
if (height) {
    console.log('Go out to spend');
} else {
    console.log('Get a job ');
}*/
/*EQUALITY VARIABLE 
console.log("Strict Cohersion = " + (18 === 18));
console.log("Strict Cohersion = " + ('18' === 18));
console.log("Loose  Cohersion = " + (18 == 18));
console.log("Loose  Cohersion = " + ('18' == 18));

const inp = prompt("Please enter a number ");
console.log(inp);
console.log(typeof(inp));
if (inp == 23) {
    console.log("Number enetered ");
} else if (inp != 23) {
    console.log("Number not enetered ");
}
if (inp === 23) {
    console.log("Number enetered ");
} else if (inp !== 23) {
    console.log("Number not enetered ");
}*/
/*BOOLEAN LOGIC  AND OR NOT 
const hasLicense = true;
const hasVision = true;
console.log(hasLicense && hasVision);
console.log(hasLicense || hasVision);
console.log(!hasLicense);*/
/*Coding Challenge 3
const dS1 = 96,
    dS2 = 108,
    dS3 = 89;
const kS1 = 88,
    kS2 = 91,
    kS3 = 110;
const avgD = (dS1 + dS2 + dS3) / 3;
const avgK = (kS1 + kS2 + kS3) / 3;
console.log("Dolphins avg = " + avgD);
console.log("Kuwala avg = " + avgK);*/

/*Switch Cae 
const day = "Monday";
switch (day) {
    case "monday": // exact day match needed 
        console.log(`${day}`);
        break;
    case "Tuesday":
        console.log(`${day}`);
        break;
    default:
        console.log(`No day selectted `);

}*/
/*STATEMENT & EXPRESSION */
/*Ternary Operation 
const age = 23;
age >= 18 ? console.log('drinr wine 🍷') : console.log(`dont drink wine 🍷 🍷`);*/
/*Coding Challenge 4 
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`Bill = ${bill} , tip = ${tip} , total value = ${bill + tip}`)*/
