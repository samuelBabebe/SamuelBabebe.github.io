function computeSalesCommission(paid,salesAmount){
    let commision;
    if(paid){
        salesAmount<300 ? commision=0:
        salesAmount>=300 && salesAmount <500 ? commision = 0.01*salesAmount:
        salesAmount>=500 ? commision = 0.02*salesAmount: null;
    }else{
        salesAmount>=300 && salesAmount<500 ? commision = 0.02*salesAmount:
        salesAmount>=500 ? commision = 0.03 *salesAmount: commision=0;
    }
    return commision;

}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

/*for sales amount of 3500 we are expecting 65 for true and 100 for false,
but if you see the math it will be 70 and 105 respectivly*/


