// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){

let numbersTotal = x.filter(number => typeof number == "number").reduce((a,b)=> a+b, 0);
let stringsTotal = x.filter(string => typeof string == "string" ).reduce((a,b) => Number(a) + Number(b), 0);
return numbersTotal - stringsTotal;
}
