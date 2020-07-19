const hobbies = ['sports', 'cooking']

for (let hobby of hobbies) {
    console.log(hobby)
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
console.log(hobbies)

hobbies.push('programming') //arrays and objects are reference types -ponteiros- 
                            //therefore you can change it even it being a const

console.log(hobbies)