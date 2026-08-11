//JS to print the string "Testleaf" in reverse order
function revString(str){
let stringToBeReversed=str;
let reversedString ="";
for (let i=stringToBeReversed.length;i>=0;i--){
    reversedString+=stringToBeReversed.charAt(i);

}
return reversedString;
}
console.log("Final output " + revString("Testleaf"));