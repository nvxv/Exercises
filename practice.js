
/* Exercise 1 */

let fullName = "John Doe"
let spacePosition1 = fullName.indexOf(" ")

/*
let str = "John Moe"
let substrings = str.split(' ', 2)
*/



firstName = fullName.substring(0, spacePosition1);
lastName = fullName.substring(spacePosition1 + 1);



console.log(lastName)