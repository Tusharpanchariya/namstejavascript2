// scopechain
function a(){

var b =2;
c();
console.log(b);
function c(){
 
}



}
a();


// output is b is 2 
function a(){

    var b =2;
    c();
   
    function c(){
     
    }
    
    
    // 
    }
    a();
    console.log(b);
    // output is b is not defined ---its not in lexical envirement of a
    
    