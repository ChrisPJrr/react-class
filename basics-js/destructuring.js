const person = {
    name: 'Chris',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

const printName = personData => console.log(personData.name)

printName(person)

//now with destructuring

const printNameDestruct = ({name, age}) => console.log(name + ' ' + age) 
                                                        //({}) gets the propertie we want 
                                                        //from the object
                                                        //pull by name

printNameDestruct(person)

const {name, age} = person
console.log(name, age)

const hobbies = ['sports', 'cooking']
const [hobby1, hobby2] = hobbies //pull by index -order-

console.log(hobby1, hobby2)