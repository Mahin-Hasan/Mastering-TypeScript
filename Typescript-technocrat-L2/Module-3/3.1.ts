{
  // oop- class
  /*
  class Animal {
    public name: string;
    public species: string;
    public sound: string; // bu default it is public
    //here name, species and sound are class property
    // if function is writen inside the class then this is known as method
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    //anonymas funciton must be used as arrow function does not support this
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  //using this class instance we want to create a dog instance
  const dog = new Animal("German Shepard", "dog", "bhaw bhaw");
  console.log(dog.sound); // bhaw bhaw
  const cat = new Animal("Persian", "Cat", "Meow meow");
  console.log(cat.sound);
  cat.makeSound();

  */
  //simplifying above code using parameter property

  class Animal {
    //parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    //anonymas funciton must be used as arrow function does not support this
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  //using this class instance we want to create a dog instance
  const dog = new Animal("German Shepard", "dog", "bhaw bhaw");
  console.log(dog.sound); // bhaw bhaw
  const cat = new Animal("Persian", "Cat", "Meow meow");
  console.log(cat.sound);
  cat.makeSound();
}
