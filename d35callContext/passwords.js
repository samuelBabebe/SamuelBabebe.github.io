"use strict"
/**
 * 
 * @param {function/method} ok login method
 * @param {function/method} fail fail method
 * @param {string} password user insert his password
 * @returns {string} returns ok or fail sentence.
 */
function askPassword(ok, fail,password) {
    //let password = prompt("Password?", '');
    if (password == "rockstar") return ok();
    else return fail();
  }

  function askPassword2(ok, fail,password) {
    //let password = prompt("Password?", '');
    if (password == "rockstar") return ok();
    else return fail();
  }

  function askPassword3(ok, fail,password) {
    //let password = prompt("Password?", '');
    if (password == "rockstar") return ok();
    else return fail();
  }
  let user = {
    name: 'John',
  
    loginOk() {
      return `${this.name} logged in`;
    },
  
    loginFail() {
      return `${this.name} failed to log in`;
    },
  
  };

  let user2 = {
    name: 'John',
  
    login(result) {
      return  this.name + (result ? ' logged in' : ' failed to log in') ;
    }
  };

 





  
  //askPassword(() =>user2.login(true), user2.login.bind(user2,false),"lol");
 //module.exports = {askPassword,user,user2,askPassword2,askPassword3}
 //console.log(askPassword3(function(){return user2.login.call(user2,true)},function(){return user2.login.call(user2,false)},"rockstar"));