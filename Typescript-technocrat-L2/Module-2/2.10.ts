{
  //mapped type
  const arrOfNumbers: number[] = [1, 3, 5];

  // const affOfStrings:string[]=['1','3','5'] // manually typed
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber["height"] // lookup type -> sets type of height as number 
  // repeeating the same typ
  //   type AreaString ={
  //     height:string;
  //     width:string;
  //   }
  //using mapped type to do the same operation in a cleaner way
  type AreaString ={
    // [key in "height" |"width"]: string // indexing manually
    [key in keyof AreaNumber]: string // indexing using keyof AreaNumber => "height" |"width"
  }
  type AreaBoolean ={
    [key in keyof AreaNumber]: boolean 
  }
  // adding flexibility and our custom type 
  type AreaNumber1 = {
    height: number;
    width: number;
  };

  // T is Reciving => {height:string;width:number;}
  // key -> "height" in 1st loop "width" in 2nd loop and it finds the type as in line 15 | see look up concept | in short T["width"]
  type AreaString1<T> ={
    [key in keyof T]: T[key] //{height:string;width:number;} T
  }

  const area1 :AreaString1<{height:string;width:number;}>={
    height:'100',
    width:50 //will give error as in line 35 it is checking for string
  }
}
