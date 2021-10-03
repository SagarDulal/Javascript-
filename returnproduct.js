//  Returning the product of the Array

let finalarray = (arr)=>{
    let resultArr = arr.map((element)=>{ 
    let arr2 = arr.reduce((arr1,num)=>{
        return (arr1 *= num);
    });
   return arr2/ element;  

});
return resultArr;
};
console.log(finalarray([1,2,3,4,5]));
console.log(finalarray[1,2,3]);



// Simple approach to the problem
let arr = [1,2,3,4,5];
let resultArr = [];
let productofNumbers = 1;
for(let i =0; i<arr.length;i++){
    for (let j=0;j<arr.length;j++){
        if(j!=i){
            productofNumbers *=arr[j];
        }
    }
    resultArr.push(productofNumbers);
    productofNumbers =1;
}
console.log(resultArr);