/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

FUNDAMENTALS
*/

function findShort(s){

var sortedArr = s.split(" ").sort((a,b) => a.length - b.length);
return sortedArr[0].length

}

findShort("bitcoin take over the world maybe who knows perhaps")