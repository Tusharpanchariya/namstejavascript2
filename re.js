// //write a code to print 1to 5 with setTieoutout
// // expexcted 1 2 3 4 5   6 6 6 6 6

// function x(){
// for(var i=1; i<=6;i++){
//     function end(){

//         setTimeout(function (){
//             console.log(i);

//         });
//     }


// }


// }
function main(){
function x(){
    var a =4;
    function y(){
        console.log(a);
    }
y();
}
x();
}
main();



function x(){
for( var i=1;i<=10;i++){
    if(  i % 2=== 0){
    function y(i){
        
    setTimeout(function(){
        console.log(i);


    }, i*2000);
}

y(i);
}

}
}
x();
