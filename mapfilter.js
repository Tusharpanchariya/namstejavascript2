const arr = [4, 3, 2, 4, 5, 7];


function double (x){
    return x * 2;
}
function triple (x){
    return x*3;

}

// // for binary 

function binary(x){
    return x.toString(2);
}
const output = arr.map(binary); // its convert arr into the bianry number

    console.log(output);

    // map function work procces 



    // Filter function 


    const arr =[5,2,3,4,6,7,9];

    function  isEven(x){
        return x % 2=== 0;  //find the even number 

    }

    
    function  isOdd(x){
        return x % 2;  //find the odd number 

    }
const output = arr.filter(isEven);     
console.log(output);      

// filter function for the filter the all values from the string or array 




//   use higher order function in map filter function 
const output = arr.filter(function greaterThan4(x){
    return x > 4;
}); 
console.log(output);



// map filter example
const users = [
    { firstName: "Tushar", lastName: "Shan", age: 19},
    { firstName: "faruk", lastName: "Abdula", age: 49},
    { firstName: "Yasin", lastName: "Malik", age: 29},
    { firstName: "Ajmal", lastName: "Kasab", age: 39},
] ;

function fullName(x){
    return x.firstName+" "+x.lastName ;
}

function age(x){
    return x<30;
}
const output = users.filter(age);

console.log(output);


// find age by using reduce function 


const output = users.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr,age];
    }else{
        acc[curr,age]=1;

    }
    return acc;
},  {});
console.log(output);


const output = users.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr,age];
    }else{
        acc[curr,age]=1;

    }
    return acc;
},  {});
console.log(output);


// find user name with age less than 40 

const output = users.filter((x)=> x.age<30).map((x)=> x.firstName);
 console.log(output);