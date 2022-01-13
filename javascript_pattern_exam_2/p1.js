var n = 5
var str = ''
for (i = 0; i <= 3 * n + 1; i++) {
    for (j = -n; j <= n; j++) {
        if (i == 0 && j == 0) {
            str += "0"

            // for third triangle tree
        } else if(i >3*n){
            str+= "="
        }
        else if (i > 2 * n && j == 0) {
            str += "=" 
        }//end
        else if (i + j == 0) {
            str += "/"
        }
        //frist tringle
        else if (  i - Math.abs(j) == 0) {
            str += "\\"
        }//end
        // third triangle pip
        else if (Math.abs(i) > 2 * n && Math.abs(j) == 1) {
            str += "|"
        }//end
        //second tri

        else if (i >= n + 1 && i - j == n) {
            str += "\\"
        } else if (i >= n + 1 && Math.abs(i) - Math.abs(j) == n) {
            str += "/"
         } //else if ( Math.abs(i) - Math.abs(j)>=3 || i + Math.abs(j) >= 0) {
        //     str += "-"
        // }//end
       else if(i <=n && Math.abs(j)<i || i<=n*(n-1) && Math.abs(j)*(n-1)<i){
           str+="-"

       }




        else {
            

            str += " "
        }

    }
    str += "\n"
}
console.log(str);