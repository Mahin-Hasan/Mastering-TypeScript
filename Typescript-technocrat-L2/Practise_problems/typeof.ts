{
  //Movie name
  const MovieName = "Deadpool"; //fixed string

  //   const aMovie:MovieType='Deadpool1' //will give warning
  //use "typeof"

  type MovieType = typeof MovieName;

  const movie = {
    title: "Rock on",
    director: "Firoz ",
  };

  type MovieDetails = typeof movie; //here type of working to pick type
  const newMovie: MovieDetails = {
    title: "dummy title",
    director: "Mir bhai",
  };

  type DetailsLog = {
    message: string;
    level: "info" | "warn" | "error";
  };
  function logMessage(input: string | number | DetailsLog) {
    if (typeof input === "string") {
      // here type of working as type guard
      console.log("Simple message:", input);
    } else if (typeof input === "number") {
      console.log("Error Code:", input);
    } else if ("message" in input && "level" in input) {
      console.log(
        `danger level ${input.level} instructions for Next Level Dev ${input.message}`
      );
    }
  }
  const test = logMessage("String type er input");
  const test1 = logMessage(23);
  const test3 = logMessage({ message: "search google first", level: "error" });
  console.log(test3);
}
