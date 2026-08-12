/* Task 3: Anonymous Function 
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
after 2 seconds. */


let displayDeplay=function (d) {
    setTimeout(() => {
        console.log(`This message is delayed by ${d} seconds`);
    }, d*1000);
}

let delay=Number(process.argv[2]);
displayDeplay(delay);