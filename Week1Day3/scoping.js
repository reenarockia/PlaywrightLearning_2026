/* Declare a global variable and shadow it inside function using 
both 'var' and 'let' to see how they behave differently */

/* 1. Declare a const name as browserVersion (global) 
2. Assign value as Chrome 
3. Create a function by name getBrowserVersion 
4. Create if condition inside function to check if browser is chrome, then 
5. Declare a local variable (browserVersion) and print that variable inside function (outside block) 
6. Call that function from the javascript  */


const browserVersion = "Chrome";

function getBrowserVersion() {
    if (browserVersion == "Chrome") {
        //browserVersion = "Test"; //TypeError: Assignment to constant variable.
        var browserVerion = "Edge";
        let browsrVersion = "Firefox";
        console.log("Accessing var inside function & within block", browserVerion);
        console.log("Accessing let inside function & within block", browsrVersion);
        
    }
    console.log("Accessing var outside if block within function", browserVerion);
    console.log("Accessing let outside if block within function", browsrVerion);//ReferenceError: browsrVerion is not defined
}

getBrowserVersion();
