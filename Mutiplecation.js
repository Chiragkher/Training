function squre(x,y){
    if(y > 10){
        return null;
    }
   
    else{
    let number = x*y
    console.log(x + "x" +y +"=" + number);
       
    y++
    squre(x,y)
   }
   }
   squre(5,1);