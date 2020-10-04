var john_bill = [124, 24, 268];
var bill;
var tip;
var payment;
var len;
var john_tip;
var final_amount;

function tip_calculator(bill){
    if (bill < 50){
        tip = 0.2 * bill;
        return tip;
    }

    else if (bill > 50 && bill < 200){
        tip = 0.15 * bill;
        return tip;
    }

    else {
        tip = 0.1 * bill;
        return tip;
    }
}

var a = tip_calculator(124);
var b = tip_calculator(24);
var c = tip_calculator(268);

john_tip = [a,b,c];
console.log('John\'s tips are: ' + john_tip);

var d = john_bill[0] + a;
var e = john_bill[1] + b;
var f = john_bill[2] + c;

final_amount = [d,e,f];
console.log('John\'s final payments are: ' + final_amount);