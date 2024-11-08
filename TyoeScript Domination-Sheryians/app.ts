let arr = [1, 2, 3, "Rocky"];
let arr2 = [1, 2, 3, "Rocky", { name: "Mahin" }, { name: 12 }];

//tuples
let arr3: [number, string] = [12, "mahin"];
//enums

enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

let a: number; // declaring a will store number type
a = 23;
// unknown and any
// when working with unknown we have to explicitely declare what type of variable we will be working with in the future
let v: unknown;
v = 15;
v = "vicky";
// v.toUpperCase();

// interface

interface User {
  name: string;
  email: string;
  pasword: string;
}

interface Admin extends User {
  admin: boolean;
}

function abcd(obj: Admin) {
  obj.admin;
}

// two interdace of the same name is marged

//constructor shorthand
class Person {
  constructor(
    public name: string,
    public age: number,
    public isAdmin: boolean
  ) {}
}
const person = new Person("Mahin", 24, true);
console.log(person);

// funciton overloading

/*
function abcd(a: string): void;
function abcd(a: string, b: number): number;

function abcd(a: any, b?: any) {
  if (typeof a === "string" && b === undefined) {
    return "hellow";
  }
  if (typeof a === "string" && typeof b === "number") {
    return 123;
  }
}
  const res = abcd("hey");
const res2 = abcd("hey", 12);
console.log(res, res2);
*/



// Generics
//genegeneric func
function log<T>(val: T) {
  console.log(val);
}
log<number>(12);
log(12); // while calling the generic function type declaration is not necessary

//generic interface

interface Sweet<T> {
  name: string;
  expiresIn: number;
  dummyValue: T;
}

function sweetItem(obj: Sweet<String>) {
  return obj;
}

let laddu = sweetItem({ name: "laddu", expiresIn: 3, dummyValue: "some dummy value" });
console.log(laddu);

// Generic class
class BottleMaker<T> {
  constructor(public dummyValue: T) {}
}
const b1 = new BottleMaker<string>("Soda");
const b2 = new BottleMaker<number>(23);
const b3 = new BottleMaker(23); // will work fine if <> is not passed
console.log(b1, b2);

//a catch while using generics
function test<T>(a: T, b: T): T {
  // return a;
  // return b;
  //return 'sdf'; // this is also a string but will give warning
  // return 'sdf' as T; // this issue can be fixed by declaring the return type also as string
  return <T>"sdf"; //will also work
}
test("check", "ok");

//type assersion

let z: any = 12;
// (z as string). // telling ts a is string
// (<number>z).

let c: null | undefined | string;
c = "hahaha";
//c!. // will provide all string methods and ! means value of c will never be null or undefined

//type guards

function tguard(arg: string | number) {
  if (typeof arg === "string") {
    return "string";
  } else if (typeof arg === "number") {
    return "number";
  } else {
    throw new Error("Something went wrong");
  }
}

// instance narrowing
class TvRemote {
  switchTvOff() {
    console.log("switching tv off");
  }
}
class CarRemote {
  switchCarOff() {
    console.log("switching car off");
  }
}

const tv = new TvRemote();
const car = new CarRemote();

function turnOffTheSwitchPrev(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) {
    device.switchTvOff();
  } else if (device instanceof CarRemote) {
    device.switchCarOff();
  }
}
function turnOffTheSwitch(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) {
    device.switchTvOff();
    // return "TV has been switched off.";
  } else if (device instanceof CarRemote) {
    device.switchCarOff();
    // return "Car has been switched off.";
  }
}
console.log("switch: ", turnOffTheSwitch(car));
