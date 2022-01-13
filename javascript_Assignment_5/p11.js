let str = ""
let n = 7
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {

    
        

        
        if (i == (n - 1) / 2 && j == (n - 1) / 2) {
            str += "o"
        }
        else if (i == j) {

            str += "\\"
        } else if ((i + j) === n - 1) {
            str += "/"
        } else if (i == 0 || i == n-1) {
            str += "-"
        }

       
        else if ( j==n-1 || j == 0) {
            str += "|"
        }
        else {


            str += " "
        }
    }
    str += "\n"
}
console.log(str);