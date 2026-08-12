//Array Methods

const arr = [1,2,3,4,true,'welcome'];

//push - Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr.push('Hello', 'Testleaf'));
console.log(arr);

//pop -Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr.pop());
console.log(arr);

//unshift - Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr.unshift('First'));
console.log(arr);

//shift - Removes the first element from an array and returns it. If the array is empty, 
// undefined is returned and the array is not modified.
console.log(arr.shift());
console.log(arr);

//slice - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
// For example, -2 refers to the second to last element of the array.
console.log(arr.slice(0,5));
console.log(arr.slice(-2));
console.log(arr);

//splice - Removes elements from an array and, 
// if necessary, inserts new elements in their place, returning the deleted elements.
//Syntax : array.splice(startIndex , deletecount, items to be added)
console.log(arr.splice(1,2,'good'));
console.log(arr);

//console.log(arr.splice(0,5));
//console.log(arr);

arr.splice(3,1);
console.log(arr);
arr.splice(4,1);
console.log(arr);




