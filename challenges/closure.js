// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words
 why nested function can access the variable internal. */


 const external = "I'm outside the function";

 function myFunction() {
   console.log(external);
   const internal = "Hello! I'm inside myFunction!";
 
       function nestedFunction() {
         console.log(internal);
       };
   nestedFunction();
 }
 myFunction();
 
 // Explanation: 
 
 /* The reason why nestedFunction can access the variable internal is because function nestedFunction 
 is saying to console log (internal) now the function is looking through out it's self and noticing
 it doesn't have a variable called internal. So forth, it then looks above in the outer scope to 
 search for what it's looking for; which causes (nestedFunction = inner Scope) to look for the variable 
 created in the outer scope (aka next scope is function myFunction). */
 
 
 /* Task 2: Counter */
 
 /* Create a function called `summation` *Complete*
 that accepts a parameter *Complete*
 and uses a counter to return the summation of that number. 
 For example, `summation(4)` *Complete*
 should return 10 because 1+2+3+4 is 10. */
 
 function summation(item) {
   const internal = 1+2+3+(item);
 
       function inside() {
         console.log(internal);
       };
   inside();
 }
 myFunction(4);
