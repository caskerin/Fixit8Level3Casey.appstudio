function calculate(a,b){
  let sum=a+b
  return sum
}

let num= prompt('Enter a number!')
let num1= prompt('Enter a second number!')

  numOne=Number(num);
  numTwo=Number(num1);
  
  let summedNumbers=calculate(numOne,numTwo)
  console.log(`The sum of ${numOne} and ${numTwo} is ${summedNumbers}`)