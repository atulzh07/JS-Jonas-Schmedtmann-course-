var massMark, massJohn, bmiMark,bmiJohn, check;

massMark = prompt("Mr. Mark please enter your mass in kg: ");
heightMark = prompt("Mr. Mark please enter your height in metres: ");

massJohn = prompt("Mr. John please enter your mass in kg: ");
heightJohn = prompt("Mr. John please enter your height in metres: ");

bmiMark = massMark/(heightMark * heightMark);
console.log(bmiMark);

bmiJohn = massJohn/(heightJohn * heightJohn);
console.log(bmiJohn);

check = bmiMark >= bmiJohn;
console.log(check);

if (check == true) {
    console.log('Mark has a higher Body Mass Index than John');
}

if (check == false) {
    console.log('John has a higher Body Mass Index than Mark');
}
