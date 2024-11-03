{
  //utility types
  //pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">; // creatingtype Name = {name: string;}
  type NameAge = Pick<Person, "name" | "age">; // creatingtype NameAge = {name: string; age: number;}

  //Omit
  type ContactInfo = Omit<Person, "name" | "age">; // creating type ContactInfo = {email?: string | undefined;contactNo: string;}

  //Required
  type PersonRequired = Required<Person>;
  //will create below type
  //   type PersonRequired = {
  //     name: string;
  //     age: number;
  //     email: string;
  //     contactNo: string;
  // }

  //Partial
  type PersonPartial = Partial<Person>;
  //will create below type and make all optional
  // type PersonPartial = {
  //     name?: string | undefined;
  //     age?: number | undefined;
  //     email?: string | undefined;
  //     contactNo?: string | undefined;
  // }

  //readOnly
  const person1: Person = {
    name: "Mr X",
    age: 200,
    contactNo: "1234",
  };

  person1.name = "Mr Y"; // changing property value

  console.log(person1);

  type PersonReadonly = Readonly<Person>;
  const person2: PersonReadonly = {
    name: "Mr X",
    age: 200,
    contactNo: "1234",
  };

  person2.name = "Mr Y"; // will give warning as readonly is used

  console.log(person2);

  //Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj2 = Record<string, string>; // string,string -> a: "aa" | <string,string> here 1st property wil always be string as we are using object

  const EmptyObj: Record<string, unknown> = {};
  const obj1: MyObj2 = {
    a: "aa",
    b: "bb",
    c: "cc", //MyObj1 will give warning
  };
}
