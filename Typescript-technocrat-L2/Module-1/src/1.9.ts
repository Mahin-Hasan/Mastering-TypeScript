{
  //type alias
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Mahin",
    age: 24,
    gender: "male",
    contactNo: "0123456789",
    address: "Sylhet",
  };
  const student2: Student = {
    name: "Rocky",
    age: 32,
    gender: "male",
    address: "ind",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Mahin";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add1 = (num1: number, num2: number): number => num1 + num2; //without type alias
  const add: Add = (num1, num2) => num1 + num2;
}
