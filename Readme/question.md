1

What is call stack ?
, the call stack is a mechanism used to keep track of the execution context of functions in a program. Whenever a function is invoked, a new frame is pushed onto the call stack to represent that function's execution context. 









=what is clusure?
answer =funtion  along with lexical scope called clouser combined  of function  along with lexical envirement 

  2=what is uses of closures in js ?
module design pattern 
--currying
-function like once
-memoize
-mainiating state  in async  world 
-settimeouts
-iterators
3=

 
 -: what is settimeout 
in set timeoot that is kind of timer in js code when we put settimeout the js run the next line and run the code and when timer time end it will be run 

What is output ?- function x(){
    var i =22;
    setTimeout(function()  {
        console.log(i);
    },6000);
    console.log("namste javascript");
    }
x(); 
Answer :- output namste javascript
                                       aftar 6 sec 22

Quens what is output 
function x(){
    for ( let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);

        },i * 1000);
        
    }
    console.log("namste javascript")
}
x(); ?
Answer 1,2,3,4,5,
because of in case of let tha seprate block scope  let create new copy every time 


Quens -: what is output    function x (){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i); },4000);
        }
     close(i);
    }

console.log("Namste Javascript");
}
x();
Answer -
output is 1,2,3,4,5, bcz of close funtion create seprate copy of i function 


Interview.js-:
what is closures?
what is advantages of clouser?
data hiding and encapsulation(Data Hiding other variable function cannot access particular data)
what is dissdvantages of closures?
answers over conjumtion of memory complex the code and those of variable not a garbage collector (garabge collector  = its used for unnecesarry varible that have no longer use garbage collector freeze that variable memory  )


QUES What is Reletion Between Garbage collector and Closures?


Ques. what is Anonymous function ?
-: A function without name 
Qunes what is function   Statement or declaration ?
Anes function statement 

a();
function a(){
    console.log("a called")
}


 Qune what is function Expression ?
 answer in this case output i b is not a funtion bcz function is include as a 
 b();

 var b= function b(){
    console.log("b called")
}




 Qunes what is diffrence between parameter & arguments?

 Answer Parameter :-
 local variable inside the function called parameter its identifier or label of function
 var b=function(param1,param2){
    console.log("b ius called");

 }

 a();
 b(1,2);
 param 1 & param 2 is parameter of function 
 Argument the value which pass inside the function called a argument b(1,2); here 1,2  as a argument

 Q --Example of Annonymous function ?
 function(){

 }
Q what is first class function ?
the ability that function use as a value that first class function is 

example :-function a(){
    console.log("a is cc");
}
var b=function  (param1){
    return function xyz (){

    }
}
console.log(b());
Q-- what is first class function citizen?

the function that used as a first class function(used to be as a value ) that is first class citizen



Q--What output when we put Let & const in first class function replace of var ?
function a(){
    console.log("a is cc");
}
let b=function  (param1){
    return function xyz (){

    }
}
console.log(b());

Answer That is treated same as well as var 
    f xyz (){

    }  

    Q---CALL BACK
    QUNES.-What is callback function ?
    Answer:-A function pass to the another function called as callback function
    

    Qunes What is event listner ?
    Anes:-its handler that is callback function  it such kiind of clouser and remain memory 
    
function attachEventlistner(){
let count=5;
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("button clicked",count++);
});
}
attachEventlistner();

.....EVENT LOOP

--Quens:- what is Event Loop ?
Answer:-When the settimeout timer ends the call back function created and event loop push into the callstack  for exectute the code and it also work for the fetch api 
that have maicro queue and call back queue

----Set Timeout truest issue


---High order function


What i higher order function?
Answer:-A function takes another function as a argument  and return from it call higher order function 
 

What Is diffrance between map and filter ?

map() transforms each element of an array and returns a new array of the same length


filter() selects elements from an array based on a condition and returns a new array containing only those elements that satisfy the condition.

 what is Counstructor function ?
A constructor function in JavaScript is a special type of function used to create and initialize objects  

what is javascript starvation / CallBack Starvation ,"JavaScript thread blocking" or "render-blocking JavaScript,"




