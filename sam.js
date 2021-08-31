function compoundInterest(initial,anualinterest,years){
    const p = initial;
    const r = anualinterest/100;
    const t = years;
    const n = 12 // n is how many times the pricipal will compound 
    const new_principal = Math.round(p*(Math.pow(1 + r/n,n*t))
    *100)/100;// multiply and dived by hundred to get two digit cents.
    return new_principal;

}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));


