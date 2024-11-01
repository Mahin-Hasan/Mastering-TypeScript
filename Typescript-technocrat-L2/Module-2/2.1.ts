{
  //type assertion
  let anything: any;

  anything = "some dummy text";
  anything = 123;
  // (anything as string). | .will give string methods suggestions
  // (anything as number). | .will give number methods suggestions

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number; // after declaring as number then hovered to result 1 will give only number as return type
  const result2 = kgToGm("1000") as string; // after declaring as string then hovered to result 2 will give only string as return type
  console.log(result1, result2);

  //using try catch in TS
  type CustomError = {
    message: string;
  };

  try {
    console.log("asd");
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
