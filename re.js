function x()      // number check odd or even
{
    for( let i=1;i<=10;i++)
    {
        setTimeout(function(){
        if(i%2=== 0)
        {
            console.log(i+" "+ "is Even");
        }
        else{
            console.log(i+" "+ "is odd");
        }
      

          
        },2000);
    }
}

x();
