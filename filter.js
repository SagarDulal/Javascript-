// 3. Filter out the odd and even numbers from given array.

var number = [1,2,3,4,5,6,7,8,9,10,0,11];

const evenNumber=number.filter(x=>x%2==0)
const oddNumber = number.filter(x=>x%2!=0)
    
console.log(evenNumber)
console.log(oddNumber)
