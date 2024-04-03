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
const output = users.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr,age];
    }else{
        acc[curr.age]=1;

    }
    return acc;
},  {});
console.log(output);


const output = users.filter((x)=> x.age<30).map((x)=> x.firstName);
 console.log(output);

