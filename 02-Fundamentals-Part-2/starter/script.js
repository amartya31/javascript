'use strict';
/*Strict usefulness 
let val = true;
const test = true;

if (test) {
    //vals = false; didn't let use Undeclared variable 
    val = false;
}
if (val != true) {
    console.log(val);
}*/
/*FUNCTIONS */
/*function makej(apple, orange) {
    console.log(`${apple} apple  ${orange} orange `);
    const val = `Juice of ${apple} apple  and ${orange} oranges `;
    return val;
}

const out = makej(5, 7);
console.log(typeof(out));
if (typeof(out) == 'string') {
    console.log(typeof(out));
}
console.log(`output of func = ${out}`);*/
/*Function Expression & Declaration  */
/*function getAge1(age) { // normal function 
    return (2021 - age);
}
const age1 = getAge1(1990);
console.log(`Age1 = ${age1} and type = ${typeof(age1)}`)
    //function expression 
const getAge2 = function(age) {
    return (2021 - age);
}
const age2 = getAge2(1991);
console.log(`Age2 = ${age2} and type = ${typeof(age2)}`)
    //const getAge2 = function(age) { Expression doesn't work after after calling the function 
    //    return (2021 - age);
    //}
    // ARROWFUNCTION - ONLINER && MULTILINE  FUNCTION 
const getAge3 = age => 1990 - age;
const age3 = getAge2(1992);
console.log(`Age3 = ${age3} and type = ${typeof(age3)}`)

const retireAge = yearBirth => { // arrow funtion 
    const age = 2021 - yearBirth;
    console.log(`Age4 = ${age} and type = ${typeof(age)}`)
    const retireAgeLeft = 60 - age;
    return retireAgeLeft;
}
const age4 = retireAge(1993);
console.log(`Age of retirement = ${age4}`);*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/
/*ARRAY*/
/*const friends = ["Amartya", "Job", "Jay", 23 - 2]; // can mutate but not entire array 
console.log(friends);
friends[1] = "Ajay";
console.log(friends);*/
// Basic Array Operations (Methods)
/*const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

/*const calTip = function(bill) {
    return bill >= 50 && bill < 300 ? (bill * 0.15) : (bill * 0.2);
}
const bills = [125, 555, 44];
const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Bills = ${bills}, \nTips = ${tips}, \nTotal ${total}`);*/

// Dot vs. Bracket Notation
/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
//const inp = prompt("What property you want to access \n firstnam,lastname,age,job,friends");
//if ((inp) && (jonas[inp])) {
//    console.log(jonas.inp); // undefined since DOT doesn't work with input needs to be kept in the SQUARE bracket 
//    console.log(jonas[inp]);
//}
jonas.location = 'Portugal';
console.log(jonas);
console.log(`${jonas.firstName} has ${jonas.friends.length} freinds named and his best frined is ${jonas.friends[1]}`)*/

//More OBJECT 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    birthYear: 1991,
    hasLicence: true,

    calAge: function(age) {
        return (2021 - age);
    }
};