function mygcd(x,y){
    let prevY = y;
    y = x % y;
    return y ? mygcd(prevY, y) : prevY
}