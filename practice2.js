// fullName = firstName + middleName + lastName

//FIRST SOLUTION - ALL IN ONE FUNCTION
// NOTE - console.log for both solutions with spacing + indents


function parseAndDisplayName (fullName) {
    let spacePosition1 = fullName.indexOf(" ");
    let spacePosition2 = fullName.lastIndexOf(" ")

    let noSpaceFound = spacePosition1 === -1
    let isTwoWordName = spacePosition1 === spacePosition2

    let firstName = fullName.slice(0, spacePosition1);
    let lastName = fullName.slice(spacePosition1 + 1);
    let middleName = fullName.slice(spacePosition1 + 1, spacePosition2)

    // These are the declarations. Either of the if statements would go after this

    if (noSpaceFound) {
        console.log(`Name: ${fullName}`) // one word name

    } else if (isTwoWordName) {
        console.log(`
            Name: ${fullName}\n
            First name: ${firstName}\n
            Last name: ${lastName}`) // two word name

    } else {
        lastName = fullName.slice(spacePosition2 + 1)

        console.log(`
            Name: ${fullName}\n
            First name: ${firstName}\n
            Middle name: ${middleName}\n
            Last name: ${lastName}`)
    }
}

//put your test names here

parseAndDisplayName("Simu John Liu")
parseAndDisplayName("John Simu")
parseAndDisplayName("John")
parseAndDisplayName("Joe Louis Barrow")

/*

SECOND SOLUTION - ONE NAME, TWO NAME, THREE NAME FUNCTIONS

This is the second solution you would put after the declarations

if (noSpaceFound) {
    console.log(`Name: ${fullName}`)
} else if (isTwoWordName) {
    parseTwoWordName(fullName, spacePosition1)
} else {
    parseThreeWordName (fullName, spacePosition1, spacePosition2)
}

function parseTwoWordName (fullName, spacePosition1) {
    let firstName = fullName.slice(0, spacePosition1);
    let lastName = fullName.slice(spacePosition1 + 1);
    console.log(`
                Name: ${fullName}\n
                First name: ${firstName}\n
                Last name: ${lastName}`)

}

function parseThreeWordName (fullName, spacePosition1, spacePosition2) {
    let firstName = fullName.slice(0, spacePosition1);
    let lastName = fullName.slice(spacePosition1 + 1);
    let middleName = fullName.slice(spacePosition1 + 1, spacePosition2)

    console.log(`
                Name: ${fullName}\n
                First name: ${firstName}\n
                Middle name: ${middleName}`)\n
                Last name: ${lastName}`

}

/*

MY NOTES

This is my first breakdown of the exercises (before we discussed it in class)

EXERCISE 2 SOLUTION (use it to test out substring + split)
let fullName = "John Doe Joe"
let spacePosition = fullName.lastIndexOf(" ")
let middleName = fullName.split(' ').reverse()[1];
let lastName = fullName.substring(spacePosition + 1);
console.log(middleName)

*/

/*

EXERCISE 2 PRACTICE (do not use this code)

let spacePosition = fullName.indexOf(" ")
let spacePosition2 = fullName.lastIndexOf(" ")
firstName = fullName.substring(0, spacePosition);
lastName = fullName.substring(spacePosition2 + 1);
firstmiddleName = fullName.substring(0, fullName.lastIndexOf(" "))
middleName = ;

*/

