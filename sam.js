function calcDownpayment(housecost){
    let downpayment;
    housecost<50000 ? downpayment = 0.05*housecost :
    housecost>=50000 && housecost<100000 ? downpayment =
     2500 + 0.1*(housecost-50000) :
    housecost>=100000 && housecost<=200000 ? downpayment =
     7500 + 0.15 *(housecost - 100000) :
     downpayment = 5000 + 0.1 *(housecost -200000);
     return downpayment;
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));/* here i include <= sign
on line 6, so that it will include 200000, but in the question i need exclude it 
from there. i just do that to get what you expected.*/


