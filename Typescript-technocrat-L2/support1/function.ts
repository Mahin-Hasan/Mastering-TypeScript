{
  //normal function and arrow function
  function multiply(num1: number, num2: number): number {
    const result: number = num1 * num2;
    return result;
  }

  console.log(multiply(2, 4));

  const sumOfTwo = (a: number, b: number): number => {
    return a+b
  };
  console.log(sumOfTwo(2, 4));

}
