

// // 3.Sum of all numbers in an array   
// // 4.Return all the palindromes in an array 
//Normal function
// 1.Print odd numbers in Array.
// let arr = [2,5,11,18,21];
// let result =[];
// function odd(arr){
//     for( let i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2 != 0)
//         {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(odd(arr));

//2.Convert all the strings to title caps in a string array
//function upper(word){
    //     const words = word.split(" ");
    //  for(let i=0; i<words.length; i++)
    // {
    //     words[i]=words[i][0].toUpperCase() + words[i].substr(1);
    // }
    //  return words.join(" ")
    // }
    // console.log(upper("guvi geek"));
    
// 
//3.Sum of all numbers in an array

// const arr = [11,12,3,4,5];
// let sum = 0;
// function addition(arr){
// for( let i=0;i<arr.length;i++)
// {
// sum = sum +arr[i];
// }
// return sum;
// }
// console.log(addition(arr));

//4.Return all the palindromes in an array 
// const arr ='121';
// const res=[];
// function palindrome(arr)
// {
//     const  arrvalue = arr.split("");
//     let reverseval = arrvalue.reverse();
//     const reversearr =  reverseval.join("");
//     if(arr == reversearr)
//     {
//         return arr;
//     }
// }
// console.log(palindrome(arr));

// Anonyomus Function
//1.Print odd numbers in an array
// const arr1 = [1,4,7,9,22,33,44];
// const res = [];
// const oddno = function(arr1){
//     for( let i=0;i<arr1.length;i++)
//     {
//         if(arr1[i]%2 != 0)
//         {
//             res.push(arr1[i]);
//         }
//     }
//     return res;
// }
// console.log("odd numbers are",oddno(arr1));

//2.Convert all the strings to title caps in a string array

//const str ="hello world";
// const words= str.split(" ");
// const upper = function(words){
//     for(let i=0; i<words.length; i++)
//  {
//      words[i]=words[i][0].toUpperCase() + words[i].substr(1);
//  }
//   return words.join(" ")
// }
// console.log(upper(words));

//3..Sum of all numbers in an array 
// const arr = [11,12,3,4,5];
// let sum = 0;
// const addition = function(arr){
//     for( let i=0;i<arr.length;i++)
//  {
//  sum = sum +arr[i];
//  }
// return sum;
// }
//  console.log(addition(arr));


// IIFE (Immediately Invoked Function Expression)
//1.Print odd numbers in an array
// (function oddnew(num)
// {
//     const numlist=[];
//     for( let j=0;j<num.length;j++){
//         if(num[j]%2 !=0)
//         {
//            numlist.push(num[j]);
//         }
//     }
// console.log("odd numbers list:",numlist);
// }
// )([11,12,13,14,15]);

//2.Convert all the strings to title caps in a string array 
// (function titlecap(word)
// {
//     const words= word.split(" ");
//  for(let i=0; i<words.length; i++)
//  {
//      words[i]=words[i][0].toUpperCase() + words[i].substr(1);
//  }
//  console.log(words.join(" "));
// })
// ("welcome to zen class");
// 3.Sum of all numbers in an array  
// (function add(num){ 
//     let sum=0;
//     for(let i=0;i<num.length;i++)
//      {
//      sum = sum + num[i];
//       }
// console.log(sum) ;   
// })([11,12,12]);


// Arrow Function (ES6)
//1.Print odd numbers in an array
// const oddfun = (arr2) =>{
// const ress =[];
// for (let k = 0; k < arr.length; k++) {
//     if (arr[k] % 2 != 0) {
//       ress.push(arr[k]);
//     }
//   }
//   return ress;
// }
// console.log("oddnumbers using arrow fun",oddfun([1,2,3,45,6,7]));

//   2.Convert all the strings to title caps in a string array 

// const upper = (word)=> {
//     const words= word.split(" ");
//  for(let i=0; i<words.length; i++)
//  {
//      words[i]=words[i][0].toUpperCase() + words[i].substr(1);
//  }
//   return words.join(" ")
// }
// console.log(upper("hai hello welcome"));


// 3.Sum of all numbers in an array  

// const arr =[1,2,3,4,5,6]
//  let sum = 0;
//  const addfun = (arr) =>{
//     for( let i=0;i<arr.length;i++)
//      {
//      sum = sum +arr[i];
//      }
//     return sum;
//     }
// console.log(addfun(arr));









