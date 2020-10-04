var john_initial_score = [123, 70, 100]
var mike_initial_score = [123, 70, 100]

var average_john = (john_initial_score[0] + john_initial_score[1] + john_initial_score[2])/3;
// console.log('John has an average score of: ' + average_john);

var average_mike = (mike_initial_score[0] + mike_initial_score[1] + mike_initial_score[2])/3;
// console.log('Mike has an average score of: ' + average_mike);

// if (average_john > average_mike){
//     console.log('The winner is John');
// }
// else if (average_john == average_mike){
//     console.log('Its a tie')
// }
// else{
//     console.log('The winner is Mike');
// }

var mary_score = [98,134,105]
var mary_average = (mary_score[0] + mary_score[1] + mary_score[2]) / mary_score.length;
// console.log(mary_average);

if (mary_average > average_john && mary_average > average_mike){
    console.log('The winner is Mary');
}

else if (mary_average == average_mike == average_john){
    console.log('Its a tie');
}

else {
    console.log('Mary is not the winner');
}