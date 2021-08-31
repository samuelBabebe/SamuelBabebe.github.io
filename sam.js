function calcDistance(x1,y1,x2,y2){
    let distance = Math.round(Math.sqrt(Math.pow((x2-x1),2) +
     Math.pow((y2-y1),2))*10)/10;
    return distance;
}
console.log("expect 5 : ", calcDistance (0, 0, 5, 5));
//here we were expecting to get 5 but when we calculate it, it is 7.1(rounded).

