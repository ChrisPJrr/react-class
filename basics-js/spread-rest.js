const hobbies = ['sports', 'cooking']

const copiedArray = [...hobbies] //spread -> "explode" the arguments therefore this is not
                                 // and element of an array

console.log(copiedArray)

const person = {
    name: 'Chris',
    age: 23,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

const copiedPerson = {...person}

console.log(copiedPerson)

const toArray = (...args) => args //rest -> merge multiple arguments into an array

console.log(toArray(1,2,3, 4))