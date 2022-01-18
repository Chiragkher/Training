let n =10
// let n = [1,2,3,4,5,6,7,8,9]

function oddeven(number){
 if(number > n){
     return null;
 }
 else if(number %2 != 0){
     console.log("here odd number", number)
 }else
 console.log("number is even", number);
    
 number++
 oddeven(number)
}
oddeven(1)