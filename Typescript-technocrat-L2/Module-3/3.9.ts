{
  //abstraction -> 1. interface 2. abstract

  //   interface Vehicle1 {
  //     name: string;
  //     model: number;
  //   }
  //   const vehicle1 : Vehicle1 ={
  //     name:'Toyota',
  //     model: 2003
  //   }

  // creating abstraction using Interface
  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  //real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
    //extra method
    test() {
      console.log("Testing func");
    }
  }
  //creating instance

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // abstract class also known as leader class

  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    //extra method
    test() {
      console.log("Testing func");
    }
  }
  //implementation
  class ToyotaClass extends Car2 {
    startEngine(): void {
        console.log("I am starting the car engine");
    }
    stopEngine(): void {
    console.log("I am stopping the car engine");
    }
    move(): void {
        console.log('I am moving the car');
    }
  }


  //creating instance
  //const hondaCar = new Car2(); // after declaring class as abstract class it will give an worning and will not allow to create instances of that class
  //hondaCar.stopEngine();
}
