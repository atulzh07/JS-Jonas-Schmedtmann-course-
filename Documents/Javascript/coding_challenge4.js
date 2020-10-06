var john = {
    name: 'John Meller',
    mass: 60,
    height: 1.88,
    bmi: function(){
        return this.mass/(this.height * this.height);
    }
}

var mark = {
    name: 'Mark Brand',
    mass: 60,
    height: 1.88,
    bmi: function(){
        return this.mass/(this.height * this.height);
    }
}

console.log('John\'s BMI is: ' + john.bmi());
console.log('Mark\'s BMI is: ' + mark.bmi());

if (john.bmi() > mark.bmi()) {
    console.log('John has a higher body mass index');
}

else if (john.bmi() < mark.bmi()) {
    console.log('Mark has a higher body mass index');
}

else {
    console.log('Both John and Mark have the same body mass index');
}