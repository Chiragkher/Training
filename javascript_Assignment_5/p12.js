 
    // 0 0 0 0 0 0 0 0 0 0 0 0 0
    // 0 a b c d e f 5 4 3 2 1 0
    // 0   a b c d e 4 3 2 1   0
    // 0     a b c d 3 2 1     0
    // 0       a b c 2 1       0
    // 0         a b 1         0
    // 0           a           0
    // 0         1 b a         0
    // 0       1 2 c b a       0
    // 0     1 2 3 d c b a     0
    // 0    1 2 3 4 e d c b a  0
    // 0 1 2 3 4 5 f e d c b a 0
    // 0 0 0 0 0 0 0 0 0 0 0 0 0

    // let i,j; 
    // let string = "";

 let n = 5;
 let str= "";
 for(i=-(n+1); i<=(n+1); i++){
   for(j=-(n+1); j<=(n+1); j++)
   {
     if(i== -(n+1)|| i==n+1 || j== -(n+1) || j==n+1){
       str+="0"
     }
     else if(Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j)>=0 || j==0)
     {
       str+= String.fromCharCode((97 + Math.abs(i)- Math.abs(j)))
     }
     else if(Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >=0)
     
     {
       str+= Math.abs(i) - Math.abs(j) +1
     } 
     
     else
     {
       str+=" "
     }
    }
    str+= "\n"

 }
 console.log(str);

    