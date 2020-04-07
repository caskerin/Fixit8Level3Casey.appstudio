let firstName = prompt('What is your first name?')
let lastName = prompt('What is your last name?')

let i=0
let j=0

while (i < firstName.length){
  console.log(`Letter ${i+1} is: ${firstName[i]}`)
  i++;
  }
console.log(`Your first name is ${firstName}`)
  
while (j < lastName.length){
  console.log(`Letter ${j+1} is: ${lastName[j]}`)
  j++;
  }
  console.log(`Your last name is ${lastName}`)
  