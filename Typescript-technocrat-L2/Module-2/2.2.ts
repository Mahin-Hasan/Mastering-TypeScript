{
  //Interface , can also be used to declare type in TS, only used in Objects
  // using Type , can be used in primitive type and also in reference type like obj
  type User1 = {
    name: string;
    age: number;
  };
  const user1: User1 = {
    name: "Mahin",
    age: 24,
  };
  //if we want ot increase property then we have to use intersection type
  type UserWithRole1 = User1 & { role: string };
  const user3: UserWithRole1 = {
    name: "Mahin",
    age: 24,
    role: "Admin",
  };

  //same but using interface , can only be used in object type
  interface User2 {
    name: string;
    age: number;
  }
  const user2: User2 = {
    name: "Mahin",
    age: 23,
  };
  //increasing property in interface
  interface UserWithRole2 extends User2 {
    role: string;
  }
  //can also extend with a type
  //   interface UserWithRole2 extends User1 {
  //     role: string;
  //   }
  const user4: UserWithRole2 = {
    name: "Mahin",
    age: 25,
    role: "guest",
  };

  //declaring array with interface
  //js - object,array. function ---> object
  //using type
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number; //here 1,2,3 stored in array and index in 0,1,2
  }

  const rollNumber1: Roll1 = [1, 2, 3]; //using type
  const rollNumber1: Roll2 = [1, 2, 3]; // using interface

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2; //using type alias
  const add2: Add2 = (num1, num2) => num1 + num2; //using interface
}
