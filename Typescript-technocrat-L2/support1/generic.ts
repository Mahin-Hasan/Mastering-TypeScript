{
  //generics
  const numArr: number[] = [1, 2, 3, 4, 5];
  const stringArr: string[] = ["Mahin", "Mahdy", "Mehat"];
  const boolArr: boolean[] = [true, false, true];

  //can also be written as
  const numArray: Array<number> = [1, 2, 3, 4, 5];
  const stringArray: Array<string> = ["Mahin", "Mahdy", "Mehat"];
  const boolArray: Array<boolean> = [true, false, true];

  //making type dynamic

  type ArrType = Array<number>;
  const numArray1: ArrType = [1, 2, 3, 4, 5];

  type ArrayType<T> = Array<T>;

  const stringArray1: ArrayType<string> = ["Mahin", "Mahdy", "Mehat"];
  const boolArray1: ArrayType<boolean> = [true, false, true];

  //interface with generics
  interface Person<T, U> {
    // T= number | U = boolean
    name: string;
    age: number | string;
    isActive: U; //boolean
    designation: string;
    id: T; //  number
  }

  const person: Person<string, boolean> = {
    name: "mad Mad",
    age: "32",
    // isActive: "true", | will give error
    isActive: true,
    designation: "Pro developer",
    id: "text",
    // id: 1234, | will give error as string is passed as param T
  };
  console.log(person);

  //function with generic
  const showMessage1 = (message: string) => {
    return message;
  };

  //   console.log(showMessage(123)); // will give error
  //solving without using any
  const showMessage = <msgType1, msgType2>(
    message1: msgType1,
    message2: msgType2
  ) => {
    return { message1, message2 };
  };

  console.log(showMessage<boolean,string>(true,"A text message"));
}
