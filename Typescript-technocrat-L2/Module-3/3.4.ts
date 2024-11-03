{
  //instanceof guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`I am making sound`);
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am Barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log("I am Meowing");
    }
  }

  //creating a function with class Animal type
  /*
const getAnimal = (animal: Animal) => {
    // animal.//will suggest properties that are available in Animal which is a parent class
    // animal.makeMeow() |will give warning as TS will not understand so we need to use instance of type guard to make it understand
    if (animal instanceof Cat) {
      // now it will allow as we added a guard
      animal.makeMeow();
    } else if (animal instanceof Dog) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  };

  */

  //creating the above func in a more cleaner way using function
  const isDog = (animal:Animal):animal is Dog=>{
    return animal instanceof Dog
  }
  const isCat = (animal:Animal):animal is Cat=>{
    return animal instanceof Cat
  }

  const getAnimal = (animal: Animal) => {
    // animal.//will suggest properties that are available in Animal which is a parent class
    // animal.makeMeow() |will give warning as TS will not understand so we need to use instance of type guard to make it understand
    if (isCat(animal)) {
      animal.makeMeow(); // will remove warning after declared Animal is Cat
    } else if (isDog(animal)) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  };


  //making instances
  const dog = new Dog("Dog bhao", "Dog");
  const cat = new Cat("cat bhao", "cat"); //here cat instance is of Cat class
  //   cat.
  getAnimal(cat);
}
