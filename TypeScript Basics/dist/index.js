"use strict";
const a = 123;
const userName = "Mahin";
const foodName = "apple";
let check = true;
console.log(a, userName, check, foodName);
// declaring a variable which can store both string and number i.e union type
let surName;
surName = 3323;
// functions
const func = (a, b) => {
    console.log(a, b);
    return a * b; //returning string type
};
const newFunc = (a, b) => {
    console.log(a, b);
    return a * b;
};
const res = func(2, 3);
const res1 = newFunc(2, 3);
console.log(res, res1);
//array
const arr = [12, 23, 345];
const arr2 = ['A word '];
const arr3 = ['one', 'two'];
const arr4 = ['one', 'two', 23, 34];
//fixed sized array or tuple
const arr5 = [12, 34, 67];
console.log(arr, arr2, arr3, arr4, arr5);
//objects
const obj = {
    height: 545,
    weight: 71,
    gender: true
};
const obj2 = {
    height: 578,
    weight: 69,
    gender: false
};
const obj3 = {
    height: 578,
    weight: 69,
};
const obj4 = {
    height: 33232,
    weight: 3454,
    nickName: "Mahin",
    func: (n, m) => {
        console.log(n * m);
    }
};
obj4.func(4, 5);
console.log(obj, obj2, obj3, obj4);
