// array. object

let groceryList: string[] = ["eggs", "milk", "bread"];

groceryList.push("butter");
console.log(groceryList);

let mixedArr: (number | string | boolean)[] = [101, "chicken", true, 3.14];
mixedArr.push("banana");
mixedArr.push(202);
mixedArr.push(false);

console.log(mixedArr);

// Tuple
let coordinates: [number, number] = [12, 24];

let nameAndAge: [string, number] = ["Mahin", 26];

// reference type object type

const user: {
  organization: "Algoman University"; // literal type fixed value will not be changed
  firstName: string;
  lastName?: string; // optional property
  age: number;
  isAdmin: boolean;
} = {
  organization: "Algoman University",
  firstName: "Mahin",
  lastName: "Hasan",
  age: 26,
  isAdmin: true,
};

user.organization = "Next Level Web Development";
user.lastName = "Hasann";
console.log(user);
