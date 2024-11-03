{
  // Getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // _ is the convention of private property
    //protected _balance: number;  // if declared protected than it can be accessed when instance is created example.

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    //   public addDeposit(amount: number){
    //       this._balance= this._balance + amount
    // }

    // public getBalance(){
    //     return this._balance
    // }
    // doing the same work using getter and setter

    //getter
    get balance() {
      return this._balance;
    }
  }

  const poorDudesAccount = new BankAccount(111, "Mr Poor", 20);
  // poorDudesAccount.id = 222; // can be modified using this way | when declare readonly it will give warning
  // poorDudesAccount.balance = 32; //will give warning as declared private
  //to add balance we have to add a function to the class cs private declared property is only accessible inside this scope
  //   poorDudesAccount.addDeposit(20); // function call kora lage

  //   console.log(poorDudesAccount);
  //   const myBalance = poorDudesAccount.getBalance(); // function call kora lage

  //using getter we are getting a function like a property
  const myBalance = poorDudesAccount.balance; // getting value like  a property and without funciton
  console.log(myBalance);


  //using setter like a property
  poorDudesAccount.deposit = 20
  console.log(poorDudesAccount.balance); //40
  console.log(myBalance); // 20 

}
