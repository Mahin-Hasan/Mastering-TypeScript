{
  //conditional type
  //   type a1 = null;
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; // true conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // nexted conditionals

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  //car ase kina / bike ase kina / ship ase kina / taractor ase ki nah
//   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  //Ts way using keyOf 
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  //checking working
  type HasBike = CheckVehicle<'bike'>
}
