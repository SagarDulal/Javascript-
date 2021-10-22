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