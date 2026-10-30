// array
var array = [1, 2, 3, 4, "hey", true] // no need of similar data type in array

//foreach, map , filter , find, indexof


//foreach
// array.forEach(function(value) {
//     console.log(value + " hello")
// })

//map--> new array with similar number of elements --> for operations in elements

// var newarr = array.map(function(val) {
//     return val * 10;
// })
// console.log(newarr)

//filter --> new array with less number of elements --> for filtering the elements

// var newarr = array.filter(function(val) {
//     // return (val % 2 == 0)
//     if (val >= 3) { return true; } else { return false; }
// })
// console.log(newarr)

//find --> return the first element which satisfies the condition

// var newarr = array.find(function(val) {
//     if (val === 4) return val;
// })
// console.log(newarr)

//indexof --> return the index of the element
// //-1 if not present in the array
// var newarr = array.indexOf(false)
// console.log(newarr)



//Objects
//{} --> blank object

// var prize = 1000

// var obj = {
//     name: "Sudeep",
//     age: 20,
//     won: prize,
// }
// Object.freeze(obj) // freeze the object so that it cannot be modified
// obj.name = "Sudeep Devkota" // no effect

// console.log(obj.name)
// console.log(obj['won'])

// //function and return

// var arr = [1, 2, 3, 4, 5]

// function abcd(a, b, c) {
//     return a + b + c;
// }
// console.log(abcd(arr[0], arr[1], arr[2])) // gives the sum of first three elements of the array;

// abcd.length // gives the number of parameters in the function


//Asynchronous programming in js coding

// var blob = await fetch(`https://randomuser.me/api/`);
// var res = await blob.json();
// console.log(res)

//line by line code chalyo bhane synchronous programming ho
// side stack ma code rakhyo bhane asynchronous programming ho
//side stack ma process huncha tara output aaudaina
// main stack ko code paila sabai run huncha ra bhai sakepachi async lai main stack ma aaucha
// ra execute huncha


// async function any() {
//     var blob = await fetch(`https://randomuser.me/api/`)
//     var ans = await blob.json();
//     console.log(ans.results[0].name);
// }

// any()


///// 

// Node.js Basics:
// Introduction to Node.js.
// Installing Node.js and npm.
// Working with modules.
// File system operations.
// understanding HTTP module


//runtime enviroment of javascript (wrapper + v8 engine core) --> node.js