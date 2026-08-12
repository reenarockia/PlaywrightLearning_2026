/* Task 2: Arrow Function 
Create an arrow function named `double` that takes a number as a parameter and returns 
double its value.  */

let double=(num)=>{
    console.log("Given number : "+num);
    return (`Double of ${num} : ${num*num}`);
}

let numberToBeDoubled = Number(process.argv[2]);
console.log(double(numberToBeDoubled));