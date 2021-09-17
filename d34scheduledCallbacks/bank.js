"use strict"
//module.exports = {makeBank}

  function makeBank(){
let transDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] }];

  //let bank ={}

  let result = 0;

 return { bankBalance : function (){

    for(let item of transDB){
      
       item.customerTransactions.map(item => result+=item)
    }
    return result;
  }
    }
  }
  //let bank = makeBank()
  //console.log(bank.bankBalance())