/* Find the odd numbers between 1 to 25 */

function findOddNumbers(a,b){
    let i=a;
    let j=b;
    console.log("Odd numbers between "+i+" && "+j);
    for(i=a; i<=j; i++){
        if(i%2==1){
            console.log(i);
        }
    }
}

findOddNumbers(1,25);