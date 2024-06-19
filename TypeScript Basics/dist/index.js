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
// -------------------------------------
//functions
//1
// type FuncType1 = (n: number, m: number, l?: number) => number 
// //optinal parameter
// const func1: FuncType1 = (n, m, l) => {
//     if (typeof l === 'undefined') return n*m;
//     return n * m * l;
// }
// const newRes = func1(43, 56)
// console.log(newRes);
//2 //default parameter
// type FuncType1 = (n: number, m: number, l?: number) => number //l needed be made optional or else it will give error
// const func1: FuncType1 = (n, m, l = 22) => {
//     return n * m * l;
// }
// const newRes = func1(43, 56)
// console.log(newRes);
//3 rest operator
// type FuncType1 = (...m: number[]) => number[];
// const func1: FuncType1 = (...m) => {
//     return m;
// }
// func1(12, 45, 234, 657, 98);
//4 functions with objects
//one way
// const getData = (product: {
//     name: string,
//     stock: number,
//     price: number,
//     photo: string,
// }): void => {
//     console.log(product);
// }
//cleaner way
// type GetDataType = (product: {
//     name: string,
//     stock: number,
//     price: number,
//     photo: string,
// }) => void;
// const getData: GetDataType = (product) => {
//     console.log('Passed product', product);
// }
// const productOne = {
//     name: "Razer",
//     stock: 12,
//     price: 35556,
//     photo: "give a photo url"
// }
// getData(productOne)
//more structured way
// interface Product {
//     name: string,
//     stock: number,
//     price: number,
//     photo: string,
//     readonly id: string,
// }
// type GetDataType = (product: Product) => void;
// const getData: GetDataType = (product) => {
//     product.name="Asus"
//     // product.id ="sosamd" cannot assign becaus it is in read only mode
//     console.log('Passed product', product);
// }
// const productOne: Product = {
//     name: "Razer",
//     stock: 12,
//     price: 35556,
//     photo: "give a photo url",
//     id: "something"
// }
// getData(productOne)
// Never Type
const errorhandler = () => {
    throw new Error();
};
