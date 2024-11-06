{
  function logString(str: unknown): void {
    if (typeof str === "string") {
      console.log(str);
    } else {
      console.error("Error not a string");
    }
  }
  console.log(logString(23));
}
