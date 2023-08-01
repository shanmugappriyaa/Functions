//1.Print odd numbers in Array.
// 2.Convert all the strings to title caps in a string array 
// 3.Sum of all numbers in an array   
// 4.Return all the palindromes in an array 
let arr = [2,5,11,18,21];
let result =[];
function odd(arr){
    for( let i=0;i<arr.length;i++)
    {
        if(arr[i]%2 != 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));
//Anonyomus Function
const arr1 = [1,4,7,9,22,33,44];
const res = [];
const oddno = function(arr1){
    for( let i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2 != 0)
        {
            res.push(arr1[i]);
        }
    }
    return res;
}
console.log("odd numbers are",oddno(arr1));

//IIFE (Immediately Invoked Function Expression)
(function oddnew(num)
{
    const numlist=[];
    for( let j=0;j<num.length;j++){
        if(num[j]%2 !=0)
        {
           numlist.push(num[j]);
        }
    }
console.log("odd numbers list:",numlist);
}
)([11,12,13,14,15]);
//Arrow Function (ES6)
const oddfun = (arr2) =>{
const ress =[];
for (let k = 0; k < arr.length; k++) {
    if (arr[k] % 2 != 0) {
      ress.push(arr[k]);
    }
  }
  return ress;
}
console.log("oddnumbers using arrow fun",oddfun([1,2,3,45,6,7]));
