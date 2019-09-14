/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/


///


function accum(s) {
	
	// everything to lower case and split it
	var string = s.toLowerCase().split('');
	
	// loop and create a new strings each starting with a capital letter and reapeated i(index of a character) times 
	for ( var i = 0; i < string.length; i ++) {
		string[i] = string[i].toUpperCase() + string[i].repeat(i)
	}

	// join and return
return string.join('-')

}


accum("abcd")