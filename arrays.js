//Arrays - Dynamic in size, heterogenous in nature - different data types

// Array Declaration
const numArray=[1,2,3,4,5,4];

//Length
console.log(numArray.length);// 6

//indexOf
console.log(numArray.indexOf(4));// 3
console.log(numArray.indexOf(8));// -1

//Adding numbers
numArray[6] = 'Welcome';
console.log(numArray);

//replace the array value
numArray[5] = true;
console.log(numArray);

//includes
console.log(numArray.includes(2));
