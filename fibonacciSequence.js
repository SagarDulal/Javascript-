// Fiboancii Sequence up to n based on user input
// Taking input from the console .
let number = process.argv[2];

let fibonacciSequence =n =>{
    const fibArray=[0,1];
     for (let i=2; i<=n-1 ;i++){
         fibArray.push(fibArray[i-1]+fibArray[i-2])
     }
     return fibArray
}
console.log(fibonacciSequence(number))