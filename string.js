//To learn about different string methods

//String literal - Stored in STack
let companyName = 'Capgemini';
let FirstName = 'Capgemini';

console.log(companyName==FirstName);
console.log(companyName===FirstName);

//Object Literal - variable is in Stack memeory , Value is in Heap Memory
let companyName1 =new String('Capgemini');
let FirstName1 = new String ('Capgemini');

console.log(companyName1==FirstName1);
console.log(companyName1===FirstName1);
console.log(companyName == companyName1);
console.log(FirstName===FirstName1);

console.log(typeof companyName);
console.log(typeof companyName1);

//Escape sequence - \ , \n, \t

let message = 'It\'s my screen';
let message1 = 'It is \n my screen';
let message2 = 'it is \t my screen';
let message3 = "It's my screen for \" Testleaf \"";
console.log(message);
console.log(message1);
console.log(message2);
console.log(message3);


//Concatenation - + ,

let testCase = 'Create new lead';
let testCaseId= '001';
let result = testCase +"-"+ testCaseId;
console.log(result);

//In modern java script we use Template literal - `${}`

let result1= `${testCase} - ${testCaseId}`
console.log(result1);


//String Properties & Methods
let course = 'Playwrighty';
//length - To find the length of the String
console.log(`The length of the string is ${course.length}`);

//charAt() - To find the carachetr at particular index
console.log(`The character at index 8 is ${course.charAt(8)}`);

//indexof() - To find the indes of particular char
console.log(`The index of letter 'y' is ${course.indexOf('y')}`);
//index of second occurence
console.log(`The index of letter 'y' is ${course.indexOf('y',2)}`);
//slice - (big index, small index)- empty string , negative index is allowed - mostly used
console.log(course.slice(1,5));//layw
console.log(course.slice(1,-2));//laywrigh
console.log(course.slice(5,2)); // empty string
console.log(course.slice(2));// prints from index 2

//substring - Automatically swap the bigger index and smaller index in order, negative index will be considered as 0)
console.log(course.substring(2,5)); //ayw
console.log(course.substring(4,2)); // ay
console.log(course.substring(5)); // righty
console.log(course.substring(5,-2));// Playw

//includes - checks if a string contains a specified substring.
console.log(course.includes('wright'));

//toUpperCase - converts a string to uppercase letters.
console.log(course.toUpperCase());

//replace() - replaces a specified value with another value in a string.
console.log(course.replace('ghty','ght'));

/* 
String length
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split() 
https://www.w3schools.com/js/js_string_methods.asp
*/