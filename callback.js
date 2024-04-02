setTimeout(function(){
    console.log("timer");
},4000);
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");

});


// event listener 


function attachEventlistner(){
    let count=5;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("button clicked",count++);
    });
    }
    attachEventlistner();
    
