// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(sum,difference) {
 if(sum < 0 || difference < 0) {
 return null
 }
 else {
	let tempAge = (sum - difference)/2
	let oldest = tempAge + difference
	let youngest = tempAge
  if ( oldest >= 0 && youngest >= 0 ) {
	return [oldest, youngest]
  }
  else {
  return null}
  }
}

getAges(24,4)