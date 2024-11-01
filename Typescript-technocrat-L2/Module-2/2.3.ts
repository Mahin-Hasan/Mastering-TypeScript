{
  // generic type
  //   type 1
  type GenericArray = Array<number>;
  //type 2
  type GenericArr<param> = Array<param>;
  //   const rollNumbers: number[] = [3, 6, 8];
  //   const rollNumbers: Array<number> = [3, 6, 8];
  //another WAY 1
  //   const rollNumbers: GenericArray = [3, 6, 8];
  //another way 2
  const rollNumbers: GenericArr<number> = [3, 6, 8];

  //   const mentors: string[] = ["X", "Y", "Z"];
  const mentors: Array<string> = ["X", "Y", "Z"];
  const mentorsz: GenericArr<string> = ["X", "Y", "Z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: Array<boolean> = [true, false, true];
  const boolArrayz: GenericArr<boolean> = [true, false, true];

  //for industy usage pattern we will use T
  type GenericArrPattern<T> = Array<T>;
  //Will accept all kind of object items so it is not recommended
  //   const user: GenericArrPattern<object> = [
  //     {
  //       name: "Mahin",
  //       age: 24,
  //     },
  //     {
  //       name: "Mahdy",
  //       age: "27",
  //     },
  //   ];
  //Proper usage
  const user: GenericArrPattern<{ name: string; age: number }> = [
    {
      name: "Mahin",
      age: 24,
    },
    {
      name: "Mahdy",
      age: 27,
    },
  ];
  // cleaner way with type and interface

  //   type User = {
  //     name: string;
  //     age: number;
  //   };
  interface User {
    name: string;
    age: number;
  }
  const user1: GenericArrPattern<User> = [
    {
      name: "Mahin",
      age: 24,
    },
    {
      name: "Mahdy",
      age: 27,
    },
  ];

  //standard tuple

  const people: [string, string] = ["first person", "second person"];

  //generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Boy", "Girl"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Mahin", email: "mahinmtrs@gmail.com" },
  ];
}
