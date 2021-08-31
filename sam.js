function sumdigts(input){
    let sum = 0;
    while(input){
        sum+=input %10;
        input = Math.floor(input/ 10);
    }
    return sum;
}
function multidigts(input){
    let multi = 1;
    while(input){
        multi*= input%10;
        input = Math.floor(input/10);
    }
    return multi;
}
console.log(sumdigts(1234),multidigts(1234));
console.log(sumdigts(102),multidigts(102));
console.log(sumdigts(8),multidigts(8));


