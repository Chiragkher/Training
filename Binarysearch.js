function binarySearch(arr, firstindex, lastindex, x){
    
        let mid = firstindex + Math.floor((lastindex - firstindex) / 2);

        // if input arr is equal to mid value then return
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, firstindex, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        if(arr[mid] < x){

            return binarySearch(arr, mid + 1, lastindex, x);
        }
    }

    // We reach here when element is not
    // present in array

let arr = [ 2, 3, 4, 10, 40 ];
let x = 4;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
if(result == -1){

    console.log( "Element is not present in array")
}else{

    console.log("Element is present at index " +result);
}
