const person = {
    name: 'Chris',
    age: 23,
    greet() {
        console.log('Hi, I am ' + this.name)  // cant use arrow function here because it would be global scope -> undefined
    }
}

person.greet()