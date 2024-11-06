{
  // class ---> object blue print ---> method

  //inheritance
  class MusicalInstrument {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    play() {
      console.log(`Playing this ${this.name}`);
    }
  }
  class Guitar extends MusicalInstrument {
    constructor() {
      super("Guiter");
    }
    tune() {
      console.log(`Tuning kortesi.. ${this.name}`);
      return "Music is prohibited"
    }
  }
  class Piano extends MusicalInstrument {
    constructor() {
      super("Piano");
    }
    openLid() {
      console.log(`Openining lid of.. ${this.name}`);
      return "Piano is prohibited"
    }
  }

  const guiterist = new Guitar();
  console.log(guiterist.name, guiterist.tune());
  const pianoist = new Piano();
  console.log(pianoist.name, pianoist.openLid());
}
