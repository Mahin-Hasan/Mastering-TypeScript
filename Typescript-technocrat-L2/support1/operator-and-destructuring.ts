{
    //spread
  const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const newRolls: number[] = [...rolls, 10, 11];
  console.log(newRolls);

  type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
    salary?: number; // nullable or optional
  };

  const person: PersonType = {
    name: "mad Max",
    age: "32",
    isActive: true,
    designation: "Pro developer",
    company: "google",
  };

  const newInfoOfPerson1: PersonType = {
    ...person,
    salary: 25000,
  };
  console.log(newInfoOfPerson1);

  //rest
    const [first,a,b,...bakiElement]=[2,3,1,5,8,9,3];
    console.log("first",first);  
    console.log("a",a);  
    console.log("b",b);  
    console.log("Rest: " ,bakiElement);  
  
}
