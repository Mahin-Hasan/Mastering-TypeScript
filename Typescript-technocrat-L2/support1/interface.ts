{
    //for oop interface and for functional prog use type
  type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
  };

  interface Person {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
  }
  interface Person {
    company: string;
  }
  //1 [difference] if same name e interface likhi taile merge kore
  const person: Person = {
    name: "mad Mad",
    age: "32",
    isActive: true,
    designation: "Pro developer",
    company: "google",
  };
  console.log(person);

  //read only
  type PersonTypeR = {
    readonly name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
  };
  const personR: PersonTypeR = {
    name: "mad Mad",
    age: "32",
    isActive: true,
    designation: "Pro developer",
    company: "google",
  };
//   personR.name="Max" |will give error bz name is declared read only
}
