{
  //nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  // searchName('Mahin')
  searchName(null);

  //unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The sped is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      // const valueNumber = value.split(' ')
      const [result, unit] = value.split(" ");
      const convertedSpeed = (+result * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("Wrong Input");
    }
  };
  // getSpeedInMeterPerSecond('1000 kmh^-1')
  getSpeedInMeterPerSecond(null);

  //never type | when a funciton does not return anything then the type is Never
  const throwError=(msg: string):never=> {
    throw new Error(msg);
  }
  throwError("triggred error");
}
