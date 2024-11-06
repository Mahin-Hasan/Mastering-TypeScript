{
  //will give error even if generic func is passed properly
  function getLength<T>(str: T) {
    return str.length;
  }

  console.log(getLength<string>("Hellow mam"));
  //soln using type assertion but it is not proper as value of T is not utilized
  function getLength1<T>(str: T) {
    return (str as string).length;
  }
  console.log(getLength1<string>("Hellow mam"));
  //soln using setting constrant value
  function getLength2<T extends { length: number }>(str: T) {
    return str.length;
  }
  console.log(getLength2<string>("Hellow mam"));
}
