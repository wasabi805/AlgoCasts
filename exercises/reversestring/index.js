// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    var revStr1 = "";
    var revStr2 ="";

    //or:
    let myArr = str.split('').reverse();
    let myResultArr = myArr.join(''); //remember to put the chars back into a string!

    for(var i=str.length-1; i>=0; i--){
        revStr1 = revStr1+str[i]
    }

    //or:
    for(let char of str){
        revStr2 = char+revStr2 //Notice char came before revStr2
    }

    //or: (SuperDuper)          //1st arg is accumulated item to bring back   //2nd arg is each char that get accumulated
    let superDuperSolution = str.split('').reduce((revString , char)=> char + revString, '');

    return superDuperSolution
}

module.exports = reverse;


