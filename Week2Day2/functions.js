/* Named function
functions and variables are hoisted - 
functions and variables are hoisted to top from their scope
 */
launchBrowser(); // Before definition it's called and executed
//login(); - ReferenceError: Cannot access 'login' before initialization
function launchBrowser(){ // function declaration and definition
    console.log("browser is launched")
}


/*Function Expression (Anonymous Function)
functions and variables are not hoisted
*/
let login=function (){
    console.log("Login Successful");    
}
login();

/* Arrow Function
functions and variables are not hoisted
*/

let funArrow = () => {
    console.log("Hello arrow");
}

funArrow();
//console.log(typeof funArrow())

let add = (price,tax) => price+tax; 
let add1 = (price,tax) => { // return is needed when {} is used
    return price+tax;
}

//get value from terminal - process - global object from js
//node path will be taken in argv[0] , file path is in agrv[1]
let priceValue = Number(process.argv[2]);
let taxValue = Number(process.argv[3]);
console.log(add(priceValue,taxValue));
console.log(add1(priceValue,taxValue));