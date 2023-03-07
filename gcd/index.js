function mygcd(x,y){
    return x % y ? mygcd(y, x % y) : y
}