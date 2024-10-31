// learning functions
// regular function | arrow function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// add(2, "2"); will now allow

const addArrow = (num1: number, num2: number): number => num1 + num2;

//object -> funciton -> method
// regular function is used bz this. does not work in arrow function
const poorUser = {
  name: "Mahin",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};
