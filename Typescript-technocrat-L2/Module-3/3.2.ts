{
  // OOP - Inheritance
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Studnet extends Person {
    constructor(name: string, age: number, address: string) {
      // by using super we can pass child constructor item to Person
      super(name, age, address);
    }
  }

  //creating class instance
  const student1 = new Studnet("Mr. Student", 22, "syl");

  //Teacher class | name age address is commong for both teacher and student also method getSleep is also common
  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take a total of ${numOfClass} classes`);
      return (`${this.name} will take a total of ${numOfClass} classes`)
    }
  }
  const teacher1 = new Teacher("Jhony", 43, "California", "Professor");
  const result = teacher1.takeClass(3)
  console.log({result});
}
