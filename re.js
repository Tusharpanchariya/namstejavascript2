// //write a code to print 1to 5 with setTieoutout
// // expexcted 1 2 3 4 5   6 6 6 6 6

function x(){
for(var i=1; i<=5;i++){
    function end(i){

        setTimeout(function (){
            console.log(i);

        });
    }
    end(i);


}


}
x();