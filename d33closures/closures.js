"use strict"
//module.exports = {inArray,inBetween,byField,makeArmy}

/**
 * 
 * @param {array} input the input array
 * @returns {boolean} returns true or false
 */
function  inArray(input){
    
    return function(num){

        let sam = input.includes(num)
        return sam;

    }
}
/**
 * 
 * @param {number} num1 input parameter
 * @param {number} num2 input parameter
 * @returns {boolean} returns true or false
 */
function  inBetween(num1,num2) {
    //let sam = []
    //sam.push(num1);
    //sam.push(num2);

    return function (num){

        //let bubu = sam.includes(num)
        //return bubu;

        if(num<=num2 && num>num1) {return true}else{return false}
    }
    
}

/**
 * 
 * @param {string} input accepts the property of object to sort
 * @returns {number} returns 1,-1 or 0 to sort
 */
function byField(input){
    if(input === "name") {return function(a,b){if(a.name>b.name)return 1;
        if(a.name==b.name)return 0; 
        if(a.name<b.name)return -1}}
    if(input==="surname"){return function(a,b){if(a.surname>b.surname)return 1;
        if(a.surname==b.surname)return 0; 
        if(a.surname<b.surname)return -1}}
    if(input ==="age"){return function(a,b){return a.age-b.age}}
}

function makeArmy(){
    let arr = [];
    for(let i = 0;i<=10;i++){
        arr.push(i);
    }
    
       let sam = arr.map(item => function(){return item})
       return sam;
    
}