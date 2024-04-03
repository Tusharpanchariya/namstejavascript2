if (true){

    //combined statement
    var a =2;
    console.log(a);
    
    
    
    }



{
    var a=2;
    const b =3;
    let c = 4;
}

//shawding
// if i put var outside the block scope the putput will be shadow(copy the ) 
var a =33;
{
    var a =22;
    let b =33;
    const c =44;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// output 
22
33
44
22

// var value change 33 to 22 bcz of global scope 


// In case of let 

let b =33;
{
    var a =22;
    let b =33;
    const c =44;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);


// output 22,33 ,44,33 
        


// let is not inside the global space it reserved separate meemory space 


//   similler to const 

const b =33;
{
    var a =22;
    let b =33;
    const c =44;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);
// output 22,33,44,33 






