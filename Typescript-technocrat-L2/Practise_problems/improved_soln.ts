{
  /*
Task 1: Basic Data Types and First Program
Objective: Write a TypeScript program that outputs a welcome message.

Instructions:

Create a TypeScript program.
Print the following message to the console:
Hello World, I will complete this course successfully and become a Next level Web Developer!

Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine.
Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
Example:
Input: "hello"
Output: "olleh"
Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.
Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
Task 10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
Task 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercased version.
If data is a number, returns the square of it.
Task 12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns.
Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed.
Task 14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay.
Task 15: Type Guards
Objective: Create custom type guards for more accurate type checking.

Instructions:

Write a function isString(value: unknown): value is string that checks if a value is a string.
Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.
Task 16: Utility Types and Keyof Constraints
Objective: Access object properties dynamically using keyof.

Instructions:

Create a function that:
Takes an object and a key.
Returns the property value from the object based on the provided key.
Use keyof to constrain the key to valid properties of the object.
Happy coding!

    */
  //task 2
  const userRole = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ): string => {
    return `User ${name} is ${age} and role is ${role ?? "not specified"}`;
  };

  const result = userRole("Mahin", 24, "admin");
  console.log(result);

  const resultWithoutRole = userRole("John", 30);
  console.log(resultWithoutRole);
  //task 3
  type Person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: number;
    job: string;
    skills: string[];
    maritalStatus: "married" | "unmarried";
    friends: number;
  };

  const person: Person = {
    name: "Mahin",
    address: "Syl",
    hairColor: "Black",
    eyeColor: "Brown",
    income: 1000,
    expense: 500,
    hobbies: ["Coding", "Reading"],
    familyMembers: 6,
    job: "Unemployed",
    skills: ["MERN", "TypeScript"],
    maritalStatus: "unmarried",
    friends: 3,
  };

  console.log(person);
  //task 4
  interface Book {
    bookName: string;
    noOfPages: number;
    author: string;
  }

  interface Magazine {
    magazineName: string;
    issueNumber: number;
    publisher: string;
  }

  // Union type: can be either a Book or a Magazine
  type CombinedBookAndMagazine = Book | Magazine;

  // Intersection type: must satisfy both Book and Magazine properties
  type AnyoneBookOrMagazine = Book & Magazine;

  const exampleUnion: CombinedBookAndMagazine = {
    bookName: "TypeScript Guide",
    noOfPages: 200,
    author: "John Doe",
  };

  const exampleIntersection: AnyoneBookOrMagazine = {
    bookName: "Tech Digest",
    noOfPages: 100,
    author: "Jane Smith",
    magazineName: "Tech Weekly",
    issueNumber: 45,
    publisher: "Tech Media",
  };

  console.log(exampleUnion);
  console.log(exampleIntersection);
  //task 5
  const reverseString = (word: string): string => {
    return word.split("").reverse().join("");
  };

  const res = reverseString("Mahin");
  console.log(res); // Should print 'nihaM'

  //task 6
  // Function using the rest operator to sum all numeric arguments
  const sumNumbers = (...numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };

  // Test
  console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

  //task 7
  const processInput = (input: string | number): number | string => {
    if (typeof input === "string") {
      return input.length;
    } else {
      return input * input;
    }
  };

  // Test
  console.log(processInput("Hello")); // Output: 5
  console.log(processInput(4)); // Output: 16

  //task 8
  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: number;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `${user.name} (${user.email}) has admin level ${user.adminLevel}`;
  };

  // Test
  const adminUser: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    adminLevel: 1,
  };
  console.log(describeAdmin(adminUser)); // Output: Alice (alice@example.com) has admin level 1

  // Task 9
  const getEmployeeCity = (employee: {
    address?: { city?: string };
  }): string | undefined => {
    return employee?.address?.city;
  };

  // Test
  const employee = { address: { city: "New York" } };
  console.log(getEmployeeCity(employee)); // Output: New York
  console.log(getEmployeeCity({})); // Output: undefined

  //task 10
  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
  };

  // Test
  console.log(getDisplayName("John")); // Output: John
  console.log(getDisplayName(null)); // Output: Anonymous
  console.log(getDisplayName(undefined)); // Output: Anonymous

  //task 11
  const processData = (data: unknown): string | number | undefined => {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "number") {
      return data * data;
    }
    return undefined;
  };

  // Test
  console.log(processData("hello")); // Output: HELLO
  console.log(processData(5)); // Output: 25

  //task 12
  // Function that throws an error and never returns
  const handleError = (message: string): never => {
    throw new Error(message);
  };

  // Usage (uncomment to see the error)
  // handleError("Something went wrong");

  //task 13
  // Generic function to remove duplicate values from an array
  const removeDuplicates = <T>(arr: T[]): T[] => {
    return Array.from(new Set(arr));
  };

  // Test
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
  console.log(removeDuplicates(["a", "b", "a"])); // Output: ["a", "b"]

  //task 14

  // Type alias for user data
  type UserData = {
    name: string;
    age: number;
  };

  // Asynchronous function simulating data fetch
  const fetchUserData = async (): Promise<UserData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John Doe", age: 30 });
      }, 1000);
    });
  };

  // Test
  fetchUserData().then((data) => console.log(data)); // Output after delay: { name: 'John Doe', age: 30 }

  //task 15
  // Custom type guard for string
  const isString = (value: unknown): value is string => {
    return typeof value === "string";
  };

  // Function using the custom type guard
  const printUpperCase = (value: unknown): void => {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log("Value is not a string");
    }
  };

  // Test
  printUpperCase("hello"); // Output: HELLO
  printUpperCase(123); // Output: Value is not a string

  //task 16
  // Function that returns a property value from an object
  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  // Test
  const person16 = { name: "Alice", age: 25, city: "Paris" };
  console.log(getProperty(person16, "name")); // Output: Alice
  console.log(getProperty(person16, "age")); // Output: 25
}
