1=what is clusure?
answer =funtion  along with lexical scope called clouser 

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
