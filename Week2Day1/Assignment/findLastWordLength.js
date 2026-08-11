/* Given a string s consisting of words and spaces, return the length of the last word in the string. 
Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. 
Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 
Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. */

function splitToArray(sentence){
    let string=sentence;
    console.log("Given sentence : "+string);
    
    //splitting the string
    let splittedString = string.trim(). //Trimmig the leading and trailing spaces if any
    split(" "). // Splitting the words by space
    filter(Boolean); //Filtering the empty strings 
   /* let splittedString = string.trim() // trim leading or trailing spaces
   .split("/s+|,.?;:/g") // Split by gaps, spaces and punctuations 
   .filter(Boolean); // Remove empty string
 */
   return splittedString; // returning the spilled word as an array
}

function findLengthOfLastWord(input){
    let input1 = splitToArray(input);
    let lastWord=input1[input1.length-1];
    console.log("Last word :"+lastWord);
    return lastWord.length;
    
}
console.log(findLengthOfLastWord("Hello World"));
console.log(findLengthOfLastWord("   fly me   to   the moon  "));

