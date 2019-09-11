/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/


function getCount(str) {
 
return str.split('').filter(val => val.match(/a/ig) || val.match(/o/ig) || val.match(/u/ig) || val.match(/e/ig) || val.match(/o/ig) || val.match(/i/ig)).length
  
}

getCount("abracadabraooiiuuee")


///


function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

getCount("abracadabraooiiuuee")

//


function getCount(str) {
 
return str.split('').filter(val => val.match(/[aeiou]/ig)).length
  
}

getCount("abracadabraooiiuuee")

