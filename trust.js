console.log("start");
setTimeout(function cb(){
    console.log("call back ");
},5000);
console.log("End");

// // // million
let startDate= new Date().getTime();
let endDate = startDate;
while (endDate<startDate+10000){
    endDate = new Date().getTime();
}
console.log("while expire");

// //that is show how settimeout have trust issue its dealy to run the code  when we execute million of line first 

console.log("start");
setTimeout(function cb(){
    console.log("call back ");
},0);
console.log("End");
//when we set timer 0 but still it get the call back queue 

console.log("Start");
function cb(){
    console.log("call back");
}
setTimeout(cb,0);
console.log("End");

// output same as well as upper code 

