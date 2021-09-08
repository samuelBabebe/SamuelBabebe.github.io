"use strict"

let calculator = {
    a : 2,
    b : 3,
    sum(){return this.a + this.b},
    mul(){return this.a * this.b}
}

/**
 * 
 * @param {number} a input number
 * @param {number} b input number
 * @returns {calculator} is a constractor function
 */
function Calculator(a,b){
    
    this.a = a;
    this.b = b;
    
}

let calc = new Calculator(20,30);
calc.sum = function(){return this.a + this.b}
calc.mul = function(){return this.a * this.b}
/**
 * 
 * @param {number} intialValue the intialvalue passed
 * @param {number} increment the increment of the intial value
 * @returns {Accumulator}
 */

function Accumulator(intialValue,increment){
    this.currentValue = intialValue;
    this.increment = increment;
}
const accumulator = new Accumulator(5,10)
accumulator.accumulate = function(){this.currentValue += this.increment};
accumulator.report = function(){return this.currentValue -this.increment};

let bank = {
        

}

bank.transactionsDB = [
                { customerId: 1, customerTransactions: [10, 50, -40] },
                { customerId: 2, customerTransactions: [10, 10, -10] },
                { customerId: 3, customerTransactions: [5, -5, 55] }];

bank.saveTransaction = function(Id,amount){
    const save  = this.transactionsDB.find(sami =>sami.customerId===Id)
    save.customerTransactions.push(amount)
}
// bank.saveTransaction(1,-59);
//console.log(bank.transactionsDB);
/**
 * 
 * @param {number} Id coustomer id
 * @param {number} amount the money in or out
 * 
 */
bank.debit = function(Id,amount){
    //const put  = this.pot(Id)
    let cheak = bank.getBalance(Id)
   if(cheak < amount) { 
       this.saveTransaction(Id,amount)
     }
    
}
/**
 * 
 * @param {number} Id customer id
 * @returns {number} total balance of the customer
 */
bank.getBalance = function(Id){
    const custm = this.transactionsDB.find(sami => sami.customerId===Id);
    let sumTotal = 0;
    for(let total of custm.customerTransactions){
        sumTotal+=total;
    }
    return sumTotal
}
/**
 * 
 * @param {number} Id 
 * @param {number} amount 
 */
bank.credit = function(Id,amount){
    //const cred = this.pot(Id);
    this.saveTransaction(Id,amount);
}
/**
 * 
 * @returns {number} total bank balance
 */
bank.bankBalance = function(){
    let totals = 0;
    //let Id;
    for(let i =1; i<=this.transactionsDB.length;i++){
        totals+=this.getBalance(i)
    }
    return totals;
}
console.log(bank.bankBalance());

//module.exports = {calculator,calc,accumulator,bank}
