// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).



function isTriangle(a,b,c) {
   
  let argArr = [...arguments].sort((a,b)=> b-a)

  if ( argArr[0] < (argArr[1] + argArr[2] + argArr[0]) - argArr[0]) {
  	return true
  } else return false
}

isTriangle(1,2,2)