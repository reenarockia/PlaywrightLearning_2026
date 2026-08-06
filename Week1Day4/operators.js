//Operators

//Arithmetic operators

console.log(5+10); // Addition
console.log(10-5); // Subtraction
console.log(10*5); // Multipilcation
console.log(11/2); //Division
console.log(11%2); // Modulo - Prints the reminder

//Assignment Operator

let a = 10;

console.log(a+=5); // a = 10+5 = 15
console.log(a-=2); // a = 15-2 = 13
console.log(a*=2); // a = 13*2 = 26
console.log(a/=2); // a = 26 /2 = 13
console.log(a%=2); // a = 13 % 2 = 1

//Comparison operator

// == loose equality - Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. This behavior occurs when JavaScript needs to perform operations or comparisons between values of different types. 
// While it can simplify code, it can also lead to unexpected results if not handled carefully.
// https://www.bing.com/ck/a?!&&p=34bfa613fd9bce41ce31d070960569a35df3152b7f42d35ed2140483bc035eceJmltdHM9MTc4NTg4ODAwMA&ptn=3&ver=2&hsh=4&fclid=29648bac-e3b1-6039-1b3d-9f83e203614a&psq=type+coercion+in+js&u=a1aHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvamF2YXNjcmlwdC93aGF0LWlzLXR5cGUtY29lcmNpb24taW4tamF2YXNjcmlwdC8
// === Strict equality - no type conversion

console.log(2 == '2'); // true
console.log(2 === '2'); // false

console.log(1 == false); // false
console.log(1 == true); // true
console.log(1 === true); // false

console.log(null == undefined); // true
console.log(null === undefined); // false - data type of null - object , data type of undefined = undefined - check


// Logical operators - To perform multiple conditions check
// && - AND
console.log(true && true); // true
console.log(true && false); // false
console.log(true && 0); // 0

// || - OR
console.log(true || true); // true
console.log(true || false); // false

// ! - NOT
console.log(!false); // true

//Unary Operator - works on single operand
let b = 5;

console.log(++b); // b+1 = 5+1 = 6 , b=6 - Preincrement
console.log(b++); // b=6 - POst increment
console.log(b); // b=7

console.log(--b); // pre decrement b = 6
console.log(b--); // b =6 post decrement
console.log(b); // b = 5
