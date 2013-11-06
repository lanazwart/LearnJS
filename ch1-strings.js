var name = 'Lana';
var hobby = ' cycling';

//Concatenation
console.log(name + ' likes ' + hobby);
//console.log(name.concat(hobby));   //not used very widely


var sentence = 'I went to the \
dog show and bought \
some treats.';
console.log(sentence);

//Using methods
//name = name.toUpperCase();

//Regular expression examples
//name = name.replace(/a/, 'x'); 	//replaces the first occurence
name = name.replace(/a/g, 'x');     //g option replaces all of them

console.log(name);

console.log(name.indexOf('x'));
