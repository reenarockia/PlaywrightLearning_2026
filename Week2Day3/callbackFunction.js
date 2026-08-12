//Callback function
//When we pass a function as a parameter to another function
//API calls to handle wait time
//To overcome callback hill - Promise and await are used

function test1(type,cb,cb1){
    console.log( type+ " Test 01");
    cb(done);
    cb1();

}

function done(){
    console.log("Test is completed");
    
}

function saveHistory(d){
    console.log("Save history Function");
    d();
    
}

test1("Sanity",done,saveHistory);
