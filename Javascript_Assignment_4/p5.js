// if  i +j = 4= greater then for 4 then  
// if  i and j =4  greater then for 4 then  
var n = 5
var str = ""
for(i = 0; i <=n; i++){
    for(j = 0; j <= n; j++){
        if( i + j <= n)
        {
            str += " "
        }else{
            str += "*";
        }
    }
    for(k=0; k<i; k++)
    {
        str+= k;
    }
    
    str += "\n"
}
console.log(str);