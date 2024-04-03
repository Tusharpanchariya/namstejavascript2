var name= "mm";
var age = 22;
var hasHobbies =true;
function summarrizeUser(userName,userAge,userHasHobby){
    return(
        'name is'+
        userName +
        ',age is'+
        userAge +
        'and the user has hobbies'+
        userHasHobby
    );
    
}
console.log(summarrizeUser(name,age,hasHobbies));