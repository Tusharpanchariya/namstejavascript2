console.log("start");
setTimeout(function cbT(){    // callback queue //
    console.log("Cb setTimeout");

},5000);
fetch ("") //  microtask Queue 

.than(function cbF(){
    console.log("CB netflix");

});


console.log("end");

// Event loop work method 