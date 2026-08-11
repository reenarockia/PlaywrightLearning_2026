/* Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.  */

 function isAnagram(str1,str2){
    console.log("Given Words : "+ str1 + ", "+ str2)
    let input1 = str1.trim().split("").sort().join("").toUpperCase();
    let input2 = str2.trim().split("").sort().join("").toUpperCase();

    //console.log(input1);
    //console.log(input2);

    if(input1.length != input2.length){
        return false;
    } else {
        return input1 == input2;
    }
}

 console.log(isAnagram('listen', 'silent'));
 console.log(isAnagram(' hello  ', 'world  '));