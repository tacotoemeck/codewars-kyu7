//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//Examples input/output:

//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false


function XO(str) {
var os = [];
var xs = [];
var newStr = str.toLowerCase().split('')


for ( var i = 0; i <= newStr.length; i++) {
	if (newStr[i] == "o") {
		os.push(newStr[i])
	} else if( newStr[i] == "x") {
		xs.push(newStr[i])
	}

}

if ( os.lenght == 0) {
	return false;
} if ( os.length === xs.length) {
	return true;
} else {
	return false;
}

};


XO("xomdfgxxoooxx")


// 

function XO(str) {

var newStr = str.toLowerCase().split('')
var os = newStr.filter(o => o == "o").length;
var xs = newStr.filter(x => x == "x").length;

if (xs === os) {
	return true;
		} else {
			return false;
		}
}
XO("xomdfgxxoooxx")