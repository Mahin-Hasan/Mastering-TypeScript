{
  // generic constrant with key of
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  //creating string literal union tyhpe

  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;

  //   const person1 :Owner= ''
  const person2: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mahin",
    age: 24,
    address: "sylhet",
  };
  const result = getPropertyValue(user, "name");
  console.log(result);

  //   const user = {
  //     name: "Mahin",
  //     age: 24,
  //     address: "sylhet",
  //   };
  //   user.address //sylhet
  //   console.log(user['address']); // sylhet
}
