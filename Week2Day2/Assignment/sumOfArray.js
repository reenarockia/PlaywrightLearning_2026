//Learn to calculate the total sum of all elements in a JavaScript array using loops and variables.

/* Assignment Requirements:
1. Create an array with numeric values
2. Declare a variable to store the sum
3. Use a loop to iterate through the array
4. Add each element to the sum variable
5. Print the final sum */

function sumOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let sumofArrayElements = (arr) => {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let a=[10,30,40,50,20];
console.log(`Sum of array elements ${a} is ${sumOfArray(a)}`);
console.log(`Sum of array elements ${a} is ${sumofArrayElements(a)}`);

