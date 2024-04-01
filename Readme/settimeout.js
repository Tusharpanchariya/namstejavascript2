function x(){
    var i =22;
    setTimeout(function()  {
        console.log(i);
    },6000);
    console.log("namste javascript");
    }
x();
// output namste js and 22 show aftar 6 sec


function x(){
    for ( let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);

        },i * 1000);
        
    }
    console.log("namste javascript")
}
x();

// output 1,2,3,4,5

function x (){
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

// output 1,2,3,4,5





