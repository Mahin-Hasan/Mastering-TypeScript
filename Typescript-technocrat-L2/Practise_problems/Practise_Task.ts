{
  //task repo : https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md
  //task 2

  const userRole = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ): string => {
    return `User ${name} is ${age} and role is ${role}`;
  };
  const result = userRole("Mahin", 24, "admin");
  console.log(result);

  //   task 3
  type Person = {
    name: string;
    address: string;
    hair_EyeColor: string;
    income_Expense: number;
    hobbies: string;
    familyMembers: number;
    job: string;
    skills: string;
    maritalStatus: string;
    friends: number;
  };

  const person: Person = {
    name: "Mahin",
    address: "Syl",
    hair_EyeColor: "Black",
    income_Expense: 0,
    hobbies: "Coding",
    familyMembers: 6,
    job: "Unemployed",
    skills: "MERN",
    maritalStatus: "unmarried",
    friends: 3,
  };
  console.log(person);

  //Task 4
  interface Book {
    bookName: string;
    noOfPages: number;
    author: string;
  }
  interface Magazine {
    bookName: string;
    noOfPages: number;
    publisher: string;
  }
  type CombinedBookAndMagazine = Book | Magazine;
  type AnyoneBookOrMagazine = Book & Magazine;

  //task 5
  const reverseString = (word: string): string => {
    const reversedWord = [];
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord.push(word[i]);
    }
    return reversedWord.join("");
  };

  const res = reverseString("Mahin");
  console.log(res); // Should print 'nihaM'

  //task 6
  const sumOfAll = (...numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };
  console.log(sumOfAll(1, 2, 3, 4, 5));

  //Task 7
  const adaptAsPerInput = (item: string | number): number | undefined => {
    if (typeof item === "string") {
      return item.length;
    }
    if (typeof item === "number") {
      return item * item;
    }
  };
  const res7 = adaptAsPerInput(5);
  console.log(res7);

  //task 8
  type User = {
    name: string;
    email: string;
  };
  type Admin = {
    adminLevel: string;
  };
  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `The user is ${user.name} with email ${user.email} and role ${user.adminLevel}`;
  };
  const adminUser: AdminUser = {
    name: "Mahin",
    email: "m@gmail.com",
    adminLevel: "Admin",
  };
  console.log(describeAdmin(adminUser));
  //task 9
  type Employee = {
    name: string;
    address?: {
      city: string;
      country: string;
    };
  };
  const employee: Employee = {
    name: "rocky",
    address: {
      city: "Mumbai",
      country: "India",
    },
  };
  const getEmployeeCity = (employee: Employee) => {
    return employee?.address?.city;
  };
  const result9 = getEmployeeCity(employee);
  console.log(result9);

  //task 10
  const getDisplayName = (employee: Employee) => {
    return employee.name ?? "Anonymous";
  };
  const result10 = getDisplayName(employee);
  console.log(result10);

  //task 11
  const processData = (data: unknown): string | number | undefined => {
    if (typeof data === "string") return data.toUpperCase();
    if (typeof data === "number") return data * data;
  };
  const reslut11 = processData(3);
  console.log(reslut11);

  //task 12
  const handleError = (message: string): never => {
    throw new Error(message);
  };
  //   handleError('Errorrrr')

  // task 13 | incomplete

  

}
