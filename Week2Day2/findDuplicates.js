//Find the duplicate values and list them out - Ans should be [1,2,4]
let arr = [1,2,3,2,4,5,1,4,9,7];
console.log("Given array: "+arr)
function findDuplicates(input){
    let duplicates =[];
    for(let i=0;i<input.length;i++){
        for(let j=i+1;j<input.length;j++){
            if(arr[i]==arr[j]){
                console.log(`\nFound Duplicate of ${arr[i]} at index ${j}`);
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}
console.log("\nDuplicates in the array: " +findDuplicates(arr));