var x =3
function cuderoot(x){
    if (x > 2){
        return null;
    }
    else{
        answer= x*x*x;
        console.log(answer); 
   
    }
    x++
    cuderoot(x)
}
cuderoot(x)



    


