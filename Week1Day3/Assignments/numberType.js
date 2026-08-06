/* Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type.

1. Create a function named that takes a number as a parameter. 
2. Declare and initialize the variable. 
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, 
and to handle the case when the number is zero. 
4. Return the corresponding string value for each case. 
5. Call the function and print the result. */

//Function to find whether the number is positive/negative/zero
function findNumType(input){
    let input1 = input;
    if (input1 > 0){
        console.log(input1+" is greater than 0 (positive number)");
    } else if(input1 < 0){
        console.log(input1+" is less than 0 (negative number)");
    } else {
        console.log("Given input is Zero");
        
    }
}

findNumType(5.6); // Calling function with positive number
findNumType(-7.2);// Calling function with negative number
findNumType(0);// Calling function with zero 