function outer (){
    var b=33;
    function inner(){
        console.log(b);
    }
    inner();
}
outer();


// Advantages of Closures
function counter (){
    var count =0;
    return function incrementCounter(){
        count++;
        console.log(count);

    }
    
}
var counter1 = counter()
counter1();
counter1();
var counter2 = counter();
counter2();
counter2();counter2();counter2();counter2();


// output 
// 1
// 2
// 1
// 2
// 3
// 4
// 5

// Hiding the value or encapsualtion





function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;    
        console.log(count);

    }
    this.decrementCounter = function (){
        count--;
        console.log(count);

    }
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();


// Mark for bhaya



function a(){
    var x =0 ,z=10;
    return function b(){
        console.log(x);
    }
}
var y =a();
y();











9