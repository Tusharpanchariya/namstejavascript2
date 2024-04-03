
function x(){
    var a =3;
    function y(){
        console.log(a);
    }
     return y;
}

// // output is nothing

function x(){x
    var a =3;
    function y(){
        console.log(a);
    }
 return  y;
}
var z =x();
console.log(z);
z();
// output 3
function z(){
    var b =66;
    function x(){
        var a=33;
        function y(){
      let c=4444;
       function w(){
   let r=666666;
      function f(){
        console.log(a,b,c,r);
      }
      f();
       }
       w();
    }
    y();

}
x();
}

z();

