{
  // basic data types

  const age: number = 25;
  const yourName: string = "Mahin Hasan";
  const isActive: boolean = true;

  //arrray
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const info: [string, string, number, number] = ["Rock", "Rokcy", 42, 78]; // tuple

  //object

  const person: {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
  } = {
    name: "mad Mad",
    age: "32",
    isActive: true,
    designation: "Pro developer",
    company: "google",
  };

  type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
  };

  const person2: PersonType = {
    name: "mad Mad",
    age: "32",
    isActive: true,
    designation: "Pro developer",
    company: "google",
  };
}
