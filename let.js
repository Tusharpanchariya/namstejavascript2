


var a=1;
let b=3;
console.log(b);
// output b is not initilize  Refrence Error
// but when we put a 

// output is undefined 


// Beacause in case of let funtion in Temporer red zone 



let a=1;
  a= 2;
  console.log(a);
//   Output type error  ---Bcz a is not initilize in other of a in case of let and const
const a=2;
a=3;
console.log(a);
//   Output type error  ---Bcz a is not initilize in  multiple time of a in case of let and const


let a=2;
let a=2;
//  in case of let 
const b=2;
const b=2;
// in case of const 
console.log(a); 
// let 
console.log(b);
// const

// output is syntex error











