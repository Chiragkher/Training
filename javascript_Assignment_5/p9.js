let n = 7;
let str = ""
for(let i =0; i <=n; i++){
    for(let j =0; j <n; j++)
    {
        if(i+j>=n ){
            str += ("@")
        }else
        {
            str += (" ")
        }
    }
    str = str.concat("\n")
}
// console.log(str);
for(let i =0; i <= n; i++){
    for(k=0; k < n ; k++){
        str+= " ";
    }
    
    for(let j =0; j <n; j++)
    {
        if(i+j<n ){
            str += ("@")
        }else
        {
            str += (" ")
        }
    }
    str += ("\n")
}
console.log(str);
