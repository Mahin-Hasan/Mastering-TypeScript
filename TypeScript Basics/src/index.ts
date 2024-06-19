const a = 123;

const userName: string = "Mahin"
const foodName = <string>"apple"

let check: boolean = true;

console.log(a, userName, check, foodName);

// declaring a variable which can store both string and number i.e union type

let surName: string | number;

surName = 3323;

// functions
const func = (a: number, b: number): number => {//: number means the function must have to return a number type
    console.log(a, b);
    return a * b//returning string type
}
//another way to declare the same function above but in a clean process
type alterMethod = (a: number, b: number) => number;

const newFunc: alterMethod = (a, b) => {
    console.log(a, b);
    return a * b
}


const res = func(2, 3)
const res1 = newFunc(2, 3)
console.log(res, res1);

//array
const arr: number[] = [12, 23, 345]
const arr2: string[] = ['A word ']
const arr3: Array<string> = ['one', 'two']
const arr4: Array<string | number> = ['one', 'two', 23, 34]
//fixed sized array or tuple
const arr5: [number, number, number] = [12, 34, 67]

console.log(arr, arr2, arr3, arr4, arr5);

//objects

const obj: {
    height: number,
    weight: number;
    gender: boolean
} = {
    height: 545,
    weight: 71,
    gender: true
}
// same obj in a cleaner way

type Obj2 = {
    height: number;
    weight: number;
    gender?: boolean; //? makes the property optional
}
//alternative of type = interface which acts like a class | interface is more prefered and used with obj and classes becasue it can be extended as inheritance

interface Obj {
    height: number,
    weight: number;
    gender?: boolean; //? makes the property optional
}

type FuncType = (n: number, m: number) => void;


interface NewObj extends Obj {
    nickName: string;
    func: FuncType;
}

const obj2: Obj2 = {
    height: 578,
    weight: 69,
    gender: false
}
const obj3: Obj2 = {
    height: 578,
    weight: 69,
}

const obj4: NewObj = {
    height: 33232,
    weight: 3454,
    nickName: "Mahin",
    func: (n, m) => {
        console.log(n * m);
    }
}
obj4.func(4, 5)


console.log(obj, obj2, obj3, obj4);