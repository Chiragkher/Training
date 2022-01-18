function num_prime(number, index){
    if(index > Math.sqrt(number)){
        console.log("prime");
        return null
    }
    if(number % index == 0){
        console.log("not prime");
        return null
    }
    index+=1;
    return num_prime(number,index);
}
num_prime(9,2)





// for ($i = 1; $i <= $number; $i++){         
//     $fact = $fact * $i;