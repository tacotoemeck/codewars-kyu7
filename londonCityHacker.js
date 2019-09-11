/*
You are given an array of a journey in London, UK. The array will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

test cases:

Test.assertEquals(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
Test.assertEquals(londonCityHacker(['Piccidilly', 56]), "£3.90");
Test.assertEquals(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
Test.assertEquals(londonCityHacker(['Piccidilly', 56, 93, 243]), "£5.40");
Test.assertEquals(londonCityHacker([386, 56, 1, 876]), "£3.00");
Test.assertEquals(londonCityHacker([]), "£0.00");

*/



//

function londonCityHacker(journey) {
 

var totalCost = 0;

for ( var i = 0; i < journey.length; i++)
	if ( typeof journey[i] == "number" && typeof journey[i++] == "number") {
		totalCost+=1.5;
     else {
    	totalCost+=2.4;
    }
//return "£" + Math.round(totalCost * 100) / 100

return "£" + totalCost.toFixed(2)
}

londonCityHacker([12, 'Central', 'Circle', 21])


//

function londonCityHacker(journey) {
 

var totalCost = 0;

for ( var i = 0; i < journey.length; i++)
	if ( typeof journey[i] == "string") {
		totalCost+=2.4;
     }else if (typeof journey[i]) {
    	totalCost+=1.5;
    } else if ( typeof journey[i] == "number" && typeof journey[i++] == "number"){
    	totalCost+=1.5
    }
//return "£" + Math.round(totalCost * 100) / 100

return "£" + totalCost.toFixed(2)
}

londonCityHacker([386, 56, 1, 876])


function londonCityHacker(journey) {
 
var bus = Math.round((journey.filter(val => typeof val == "number").length*1.5)*100)/100
var tube = Math.round((journey.filter(val => typeof val == "string").length*2.4)*100)/100

var totalCost = bus + tube

for ( let i=0; i < journey.length; i++) {
	if (typeof journey[i] == "number" && typeof journey[i+1] == "number") {
		totalCost-=1.5
		i++
	}
}


return "£" + totalCost.toFixed(2)
}

londonCityHacker([386, 56, 1, 876])