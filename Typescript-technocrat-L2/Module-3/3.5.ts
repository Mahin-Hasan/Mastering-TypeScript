{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;  // _ is the convention of private property
    //protected _balance: number;  // if declared protected than it can be accessed when instance is created example.

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    public addDeposit(amount: number){
        this._balance= this._balance + amount
    }
    public getBalance(){
        return this._balance
    }
  }

  class StudentAccount extends BankAccount{
    test(){
        // this. | if protected than balance suggestion will come but if private is used it will not show 
    }
  }

  const poorDudesAccount = new BankAccount(111, "Mr Poor", 20);
 // poorDudesAccount.id = 222; // can be modified using this way | when declare readonly it will give warning
 // poorDudesAccount.balance = 32; //will give warning as declared private
  //to add balance we have to add a function to the class cs private declared property is only accessible inside this scope
  poorDudesAccount.addDeposit(20)

  console.log(poorDudesAccount);
  const myBalance= poorDudesAccount.getBalance()
  console.log(myBalance);
}
