"use strict"

function filterRange(arr, a, b){

    return arr.filter(item => {return item>=a && item<=b})
  
 }
 
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
   function Calculator(a){
    this.a = a;

}
const calculator = new Calculator();
calculator.calculate = function(a){
    let arr;
    //et calc =0
    let sum =0;
    let multi = 1;
    let pow ;
    let minus = 0;

   if( a.includes("+")) { 
    arr = a.split("+");
        for(let item of arr){
           let sam =  Number(item);
             sum+=sam
        }
        return sum;
         
    }else if(a.includes("-")){
        arr = a.split("-");
        for(let i =1; i<arr.length;i++){
            let sam = Number(arr[0])
            let bubu = Number(arr[i]);
             minus = sam-bubu;
        }
        return minus;

    }else if(a.includes("**")){
        arr=a.split("**");
        for(let i = 0; i<arr.length;i++){
            let sam = Number(arr[0]);
            let bubu = Number(arr[1]);
            pow = Math.pow(sam,bubu);
        }
        return pow
    }else if (a.includes("*")){
        arr = a.split("*");
        for(let item of arr){
             let sam = Number(item);
            multi*=sam;
        }
        return multi;
    }
}
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
module.exports = {filterRange,filterRangeInPlace,calculator,unique}
  