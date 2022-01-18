let arrayoflist = [1,2,3,4,5,6,7,8,9,10,12,11,13,3]
// let storedarray;
let add = 0
function arr(index){
    if(arrayoflist.length <= index){
        // console.log("*");
    return null;
}
else{
    console.log(arrayoflist[index]);
}
index++
arr(index)
// add = add + index
}
arr(0)
// console.log(add);