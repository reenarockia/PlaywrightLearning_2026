/* Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
number is odd and `"Even"` if the number is even.

1. Create a function named `isOddOrEven` that takes a number as a parameter   
2. Declare and initialize the variable   
3.  Use a conditional statement to check if the number is divisible by 2  
4. Call the function and print the result */


// Function to return whether the number is odd or even
function isOddOrEven(num){
    let n = num;

    if(typeof n !== 'number'){
        return(n +" - Invalid input")
    } else if (n%2==0) {
        return("Given number "+n+" is an even number");
        
    } else {
        return("Given number "+n+" is an odd number");
        
    }
}

//Find odd and even numbers from 1 to 15
for (let i=1; i<=15; i++){
    console.log(isOddOrEven(i));
}

//To check the input
//console.log(isOddOrEven('abc'));
console.log(isOddOrEven('abc'));