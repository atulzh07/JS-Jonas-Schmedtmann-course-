function bmi(mass,height){
    return mass/(height * height);
}
let john = {
    name: 'John Meller',
    mass: 80,
    height: 1.79,
    get w(){
        return bmi(this.mass, this.height);
    }
}
let mark = {
    name: 'Mark Brand',
    mass: 60,
    height: 1.88,
    get w(){
        return bmi(this.mass, this.height);
    }
}
console.log('John\'s BMI is: ' + john.w);
console.log('Mark\'s BMI is: ' + mark.w);
if (john.w > mark.w) {
    console.log('John has a higher body mass index');
} else if (john.w < mark.w) {
    console.log('Mark has a higher body mass index');
} else {
    console.log('Both John and Mark have the same body mass index');
}