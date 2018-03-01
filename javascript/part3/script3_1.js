

// builds in memory immediately
var diff = function diffOfSquares (a,b) {
	return a*a - b*b;
}; //needs semi-colon to complete

//shows what function is refering to
console.log(diff)

//can build a function without a name
// EX: var diff = fucntion (a,b)

var greeting = function () {
	console.log("Thanks for visiting the Badlands!");
};

closeTerminal(greeting);

function closeTerminal (message){
	message()
}

var numbers = [12,4,3,9,8,6,10,1];

// short functions are often built all in one line
var results = numbers.map(function (arrayCell){
	return arrayCell*2
});

console.log(results);

// can create an array of functions
/* var puzzlers = [
  	function(input){ return 3*input-8;},
  	function(input){ return Math.pow((input +2),3);},
  	function(input){ return Math.pow(input, 2)-9;},
  	function(input){ return input % 4;} ];
 */ 