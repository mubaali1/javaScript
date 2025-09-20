console.log("This output from an intiger array: ");
let arr = [1,2,3,4,5,6];
let acc = arr.reduce((acum, currnt) =>{
    return acum + currnt;
}, 0);
console.log(acc);

let arr2 = ["apple", "Boy", "Cat", "apple", "cat", "bat", "bat"];

let arr3 = arr2.reduce((arr3, currentValue) =>{
    arr3[currentValue] = (arr3[currentValue] || 0 ) + 1;
    return arr3;
}, {});

console.log("This output from an string of array: ");
// alert("we aware");
console.log(arr3);