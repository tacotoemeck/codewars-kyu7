// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2



function GetSum(a,b) {

	let sortedArr = [a, b].sort((x,y) => b - a);
	console.log(sortedArr)
	let result= 0;

	for ( let i = sortedArr[0]; i <= sortedArr[1]; i++) {
		result+=i
	}
	return result
}
GetSum(-10, -12)