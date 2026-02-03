const firstName = 'Ritesh';
const lastName = 'Nahak';
/*
console.log('My name is  ' + firstName + ' ' + lastName);

// using template literal ``
console.log(`My name is ${firstName} ${lastName}`);

console.log(
  'String with \n\
multiple\n\
lines',
);

console.log(`Srting with
multiple
lines`);

*/

/*
// eligble fo DL or not
const age = 12;
if (age >= 18) {
  console.log('Congrats! You are eligible for DL');
} else {
  console.log(`You will get DL after ${18 - age} years`);
}

// born on which century
const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
// type conversion

const input = '1991';
console.log(input + 18);
console.log(Number(input) + 18);

const textInput = 'Adc';
console.log(Number(textInput) + 18); // NaN - Not a number means invalid number
console.log(typeof NaN); // number
