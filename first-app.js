/* const fs = require('fs')

fs.writeFileSync('hello.txt', 'hello from the other side') */


// Normal function vs arrow

const name = 'Chris'
let age = 23
const hasHobbies = true

age = 24

function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' + userName + ', age is ' + userAge +
     ' and the user has hopbbies: ' + userHasHobby)
}

console.log(summarizeUser(name, age, hasHobbies))

const summarizeUserArrow = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge +
     ' and the user has hopbbies: ' + userHasHobby)
}

console.log(summarizeUserArrow(name, age, hasHobbies))

//shorter version

const add = (a, b) => a + b //only when we just would have the return argument and no other

console.log(add(1,2))

const addOne = a => a + 1 //only with one argument you can skip ()

console.log(addOne(1))

const addRandom = () => 5 + 5 //no arguments syntax

console.log(addRandom())