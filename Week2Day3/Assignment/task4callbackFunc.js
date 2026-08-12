/* Task 4: Callback Function 
Create a function named `getUserData` that takes a callback function as a parameter. Inside 
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function 
with a user object after 3 seconds. 
Call the `getUserData` function and log the user's name and age using the callback function. */

function getUserData(cb){
    setTimeout(() => {
        console.log("Hello, the data is fetched in 3 sec");
        cb(userName,userAge);
        
    }, 3000);
}

function logUserDetail(name,age){
    console.log(`User Name: ${name}, User age : ${age}`);
}

let userName = process.argv[2];
let userAge = process.argv[3];
getUserData(logUserDetail);