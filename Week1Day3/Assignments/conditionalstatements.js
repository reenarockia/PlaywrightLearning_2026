/* Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages.

Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript */


//Function to print the browser type
function launchBrowser(browserName){
    let browserType=browserName;
    if(browserType == "Chrome"){
        console.log("This is Chrome");
    } else {
        console.log("This is not Chrome");
    }
}

//Function to print the test type
function runTests (testType){
    let testType1=testType;
    switch (testType1){
        case "smoke": 
            console.log("Run "+testType1+" test cases");
            break;
        case "sanity":
            console.log("Run "+testType1+" test cases");
            break;
        case "regression":
            console.log("Run "+testType1+" test cases");
            break;
        default:
            console.log("Run smoke test cases");
    }
    
}

launchBrowser("Chrome");
launchBrowser("Safari");
runTests("find");
runTests("regression");