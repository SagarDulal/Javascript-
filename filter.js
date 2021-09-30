// 3. Filter out the odd and even numbers from given array.

var num = [1,2,3,4,5,6,7,8,9,10,0,11];
var even = [];
var odd = [];

 for ( let i =0; i<(num.length); i++){
    if (num[i] %2 == 0 ){
        even.push(num[i]);
    }
    else{
        odd.push(num[i]);
    }
 }
 console.log("Even numbers are "+ even);
 console.log("Odd numbers are " + odd);