"use strict"



class Account {
    constructor(account,balance){
        this.account = account;
        this.balance = balance;

    }
     getNumber(){
        return this.account;
    }

    getBalance(){
        if(this.balance==undefined) this.balance = 0
        return this.balance;
    }

    withdraw(amount){
        if(amount<0) { 
           return RangeError("The argument must be between -500 and 500.") 
        }else if(amount>this.balance){
               return new Error("Insufficient funds")
        }else{
               return this.balance-=amount;
        }
    }
     deposit(amount){
        
        if(amount<0) { 
            return`${RangeError} "Deposit amount has to be greater than zero"` 
        }else if(this.balance==undefined){
                return this.balance = 0+amount
        }else{
       return this.balance+=amount;
         
        }
    } 

    toString(){
        return `Account ${this.getNumber()}: balance ${this.getBalance()}`
    }

    endOfMonth(){
        return ``
    }
    
}

class SavingsAccount extends Account{
    constructor(account,interest,balance){
     
        super(account,balance);
        
        this.interest =  interest;
        //this.amount = amount;

    }

        //addInterest(){}
        

         
        addInterest(){
            let int = this.balance *this.interest/100
            return this.balance += int;
        }
        setInterest(value){
            return this.interest = value;
        }

        getInterest(){
            return this.interest
        }

        toString(){
            return `SavingsAccount ${this.getNumber()}: balance ${this.getBalance()}: interest ${this.getInterest()}`
        }
    
        endOfMonth(){
            return `Interest added SavingsAccount ${this.getNumber()}: balance ${this.getBalance()}: interest ${this.getInterest()}`
        }

    
}

class CheckingAccount extends Account{
    constructor(account,overdraft){
      
    super(account);
    this.overdraft = overdraft;

    }

    getOverdraft(){
        return this.overdraft
    }

    setOverdraft(value){
        return this.overdraft = value
    }

    withdraw(amount){
        if((this.balance-amount)<(-1*this.overdraft)){
            return console.error(Error,"Insufficient funds, cannot withdraw beyond overdraft limit")
        }else{
            return this.balance-=amount;
        }

        

    }
    toString(){
            return `CheckingAccount ${this.getNumber()}: balance ${this.getBalance()}: overdraft limit ${this.getOverdraft()}`
        }
    
        endOfMonth(){
            if(this.balance<0){
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance ${this.getBalance()}: overdraft limit ${this.getOverdraft()}`
            }else{
                return ``
            }
        }
}

class bank{
    constructor(){
     
        this._accounts = [];
        this.count = 0
        this.account =undefined
        this.savingsaccount = undefined
        this.checkingaccount =undefined


    }
    

    addAccount () {
        
        
      let inerfunc = () =>{
            return ++this.count
        }
        this.account = new Account(inerfunc())

        return this._accounts.push(this.account)
    }

    addSavingsAccount (interest) {
        
        
        let inerfunc =() =>{
            return ++this.count
        }
        this.savingsaccount = new SavingsAccount(inerfunc(),interest)

        return this._accounts.push(this.savingsaccount)
        

    }

    addCheckingAccount (overdraft) {

        
         let inerfunc = () =>{
            return ++this.count
        }
         this.checkingaccount = new CheckingAccount (inerfunc(),overdraft)

        return this._accounts.push(this.checkingaccount)
        

    }
    closeAccount (number) {
        this._accounts.splice(number-1,1)
        return this._accounts;
    }

    accountReport(){
        //let savindex = this._accounts.indexOf(this.savingsaccount);
        //let chekindex= this._accounts.indexOf(this.checkingaccount)
        return `SavingsAccount ${this.savingsaccount.account}: balance ${this.savingsaccount.getBalance()}: interest ${this.savingsaccount.interest}\nCheckingAccount ${this.checkingaccount.account}: balance ${this.checkingaccount.getBalance()}: overdraft limit ${this.checkingaccount.getOverdraft()}\n`
    }

    endOfMonth(){
        return `Interest added SavingsAccount ${this.savingsaccount.account}: balance ${this.savingsaccount.getBalance()}: interest ${this.savingsaccount.interest}\nWarning, low balance CheckingAccount ${this.checkingaccount.account}: balance ${this.checkingaccount.getBalance()}: overdraft limit ${this.checkingaccount.getOverdraft()}\n`
    }


}

//module.exports ={Account,SavingsAccount, CheckingAccount,bank }

