

function attachEventlistner(){
let count=5;
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("button clicked",count++);
});
}
attachEventlistner();
