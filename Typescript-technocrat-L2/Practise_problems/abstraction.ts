{
  //abstraction
  class CoffeeMachine {
    private isPowerOn: boolean = false;  //here it is directly initiated so no constructor required

    powerOn() {
      this.isPowerOn = true;
      console.log("coffee machine is on");
      return `Coffee banan`
    }
    makeCoffee() {
      if (this.isPowerOn) {
        console.log("Coffee Brewing");
      } else {
        console.log("Going out for coffe");
      }
    }
    powerOff() {
      this.isPowerOn = false;
      console.log("coffee machine is Powered off");
    }
  }
  const myCoffeeMachine = new CoffeeMachine()
  console.log(myCoffeeMachine.powerOn()); 

}
