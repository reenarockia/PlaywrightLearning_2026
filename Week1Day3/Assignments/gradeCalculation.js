/* Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges. 

1. Create a function that takes a student's score as a parameter. 
2. Declare and initialize the variable. 
3. Use `switch` statement inside the function. 
4. Return the corresponding grade. 
5. Call the function and print the result. */

//Function 
function gradeCalc(score){
    let studentScore = score;
    //Check the score is valid or not
    if(studentScore < 0 || studentScore > 100){
        console.log("Invalid score");
    } else {
    switch (true){
        case (studentScore > 90) :
            console.log("Scored " +studentScore+ " & Grade A+");
            break;
        case (studentScore > 80 && studentScore <=90 ):
            console.log("Scored " +studentScore+ " & Grade A");
            break;
        case (studentScore > 70 && studentScore <=80):
            console.log("Scored " +studentScore+ " & Grade B+");
            break;
        case (studentScore > 50 && studentScore <=70):
            console.log("Scored " +studentScore+ " & Grade B+");
            break;  
        default :
            console.log("Scored " +studentScore+ " & Failed");
            
        }
    }
}

gradeCalc(95);
gradeCalc(-95);

