// I.Assignment 1: Variables and Data Types
// 1.Problem: Implement a simple calculator program that takes two numbers and an operator as inputs and performs the corresponding operation.

// var number = prompt("select add/sub/mul/div/% : ");
// switch (number) {
    //   case "add":
    //     var num1 = +prompt("Enter the number1 : ");
    //     var num2 = +prompt("Enter the number2 : ");
    //     var sum = num1 + num2;
    //     console.log(`sum of ${num1} and ${num2} is ${sum}`);
    //     break;
    //   case "sub":
    //     var num1 = +prompt("Enter the number1 : ");
    //     var num2 = +prompt("Enter the number2 : ");
    //     var sum = num1 - num2;
    //     console.log(`sbutraction of ${num1} and ${num2} is ${sum}`);
    //     break;
    //   case "mul":
    //     var num1 = +prompt("Enter the number1 : ");
    //     var num2 = +prompt("Enter the number2 : ");
    //     var sum = num1 * num2;
    //     console.log(`mutliplicaiton of ${num1} and ${num2} is ${sum}`);
    //     break;
    //   case "div":
    //     var num1 = +prompt("Enter the number1 : ");
    //     var num2 = +prompt("Enter the number2 : ");
    //     var sum = num1 / num2;
    //     console.log(`division of ${num1} and ${num2} is ${sum}`);
    //     break;
    //   case "%":
    //     var num1 = +prompt("Enter the number1 : ");
    //     var num2 = +prompt("Enter the number2 : ");
    //     var sum = num1 % num2;
    //     console.log(`modules of ${num1} and ${num2} is ${sum}`);
    // }
    
    // 2.Problem: Write a program that checks if a given number is even or odd using an if-else statement.

    // var a = +prompt("Enter the number : ");
    // if (a > 0) {
//   if (a % 2 == 0) {
//     console.log(`${a} is even number`);
//   } else {
//     console.log(`${a} is odd number `);
//   }
// } else {
//   console.log("Enter only positive integer");
// }


// II.Assignment 2: Conditional Statements
// 1.Problem: Create a program that determines whether a given year is a leap year or not using if-else statements.


// var year = +prompt("Enter the year to check whether leap year or not : ");
// if (year > 0) 
// {
//       if ((year % 4 == 0 || year % 100 != 0 )&& year % 400 == 0)
//        {
//             console.log(`Entered ${year} is leap year`);
//           }
//            else 
//            {
//                 console.log("Entered number is not a leap year");
//               }
//             } 
// else console.log("Enter only positive number");
                
                
// 2.Problem: Write a program that prompts the user for their age and outputs a message based on whether they are a child, teenager, adult, or senior.
                
                // var age = prompt("Enter the age : ")
// if(age>0){
    //     if(age>=1 && age < 14){
        //       console.log(`As you are age ${age} is year you belong to children group `)
        //     }
        //     else if(age>=14 && age <=18)
        //     {
            //       console.log(`As you are age ${age} is year you belong to Teenage group `)
            //     }
            //    else if(age>=19 && age <=25)
            //    {
                //       console.log(`As you are age ${age} is year you belong to adult group `) 
                //    }
                //    else if (age>=26){
                    //      console.log("You are senior ")
                    //    }
                    
                    // }
                    // else{
                        //  console.log("Enter only positive value to check whether you are in which stage")
// }

// 3.Problem: Implement a grading system program that takes a student's score as input and outputs their grade (A, B, C, D, or F) using if-else if statements.

// var marks = +prompt("Enter you are marks to check the grade : ")
//   if(marks>0 && marks<=100){
//      if(marks>=85 && marks <=100){
//         console.log(`As you marks are ${marks} you belong to A grade `)
//      }
//      else if(marks>=70 && marks <=84){
//         console.log(`As you marks are ${marks} you belong to B grade `)
//      }
//      else if(marks>=55 && marks <=69){
//         console.log(`As you marks  are ${marks} you belong to c grade `)
//      }
//      else if(marks>=40 && marks <=54){
//         console.log(`As you marks are ${marks} you belong to D grade `)
//     }
//     else{
//          console.log(`As you marks are ${marks} marks you are result is "FAIL" `)
//      }
//   }
//   else{
//    console.log("Enter only positive values less than 100")
//   }



// III.Assignment 3: Loops and Break/Continue Statements:
// 1.Problem: Write a program that uses a for loop to print the multiplication table of a given number.


// var n = +prompt("Enter the number : ")
// for(i=1;i<=10;i++){
    //     var count=n*i;
    //     console.log(`${n} * ${i} = ${count}`)
    // }
    
// 2.Problem: Create a program that uses a do-while loop to calculate the sum of numbers entered by the user until they enter 0.
    
    // var add=0;
    // do{
        //     var num = +prompt("Enter the number : ")
        
        //         add+=num;
        
        // }while(num!=0)
        // console.log(add)



// IV.Assignment 4: Loops and Functions Intro:
// 1.Problem: Write a function that takes a string as input and returns the reversed version of the string.

// var reverse="";
// var string= "Hello";
// for(i=string.length-1;i>=0;i--){
//       reverse+=string[i];
// }
// console.log(reverse)