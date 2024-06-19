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
// const errorhandler = (): never => {
//     throw new Error()
// }

//_______________

//classes
class Player {
    // private height; // is acessable within the class
    // weight;
    public readonly id: string;
    constructor(
        private height: number,
        public weight: number,
        protected power: number,
    ) {
        this.id = String(Math.random() * 100);
        // this.height = height;
        // this.weight = weight;
    }
    myHeight = () => { //can only be accessed in this class
        return this.height;
    }
    //using getter function
    get getMyHeight(): number {
        return this.height;
    }
    //setter func
    set changeHeight(val: number) { //no return 
        this.height = val;
    }
}
const rocky = new Player(120, 60, 30);
// console.log(rocky.power); power can not be accessed directly bz protected it can be used by extending a class

class Player2 extends Player {
    special: boolean;
    constructor(height: number, weight: number, power: number, special: boolean) {
        super(height, weight, power)
        this.special = special
    }
    getPower = () => this.power; // power is protected and can be accessed in the sub class
}

const rocky1 = new Player2(10, 20, 30, true)
console.log("Weight", rocky1.getPower());
console.log("Id", rocky.id);
console.log("Height", rocky.myHeight());//getting hieght using function
console.log("Height", rocky.getMyHeight);//getting height using the getter
rocky.changeHeight=122;
console.log("Height", rocky.getMyHeight);//getting height using the getter after setting 