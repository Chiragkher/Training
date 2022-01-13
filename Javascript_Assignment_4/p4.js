// var n = 5;
// for(i = 0; i < n; i++){
//     for(j = 0; j < n; j++)
//     {
//         if( i === 0 || j === n-1){
//             str+= "*"
//         }
//         else{
//             if( i === 0 || j === n-1){
//                 str+= "" 
//             }

//         }
//     }
//     str += "\n"
// }
// console.log();


// var i = 0
var str = "";
var n = 5
for(i = 0; i < n; i++){
    for(j =0; j <=i; j++){
        str += "*"

      
    }
    str += "\n"
}
console.log(str);