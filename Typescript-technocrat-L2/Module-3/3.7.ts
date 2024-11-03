{
  // static
  class Counter {
    count: number = 0;
    increment() {
      return (this.count = this.count + 1);
    }
    decrement() {
      return (this.count = this.count - 1);
    }
  }
  const instance1 = new Counter();
//   console.log(instance1.increment()); // 1 - different memory
  const instance2 = new Counter();
//   console.log(instance2.increment()); // 1 - different memory

  // if we want our counter to increse when called from any created instance
  class Counter1 {
   static count: number = 0; // when used static than this is replaced with class name
   static increment() {
      return (Counter1.count = Counter1.count + 1);
    }
    static decrement() {
      return (Counter1.count = Counter1.count - 1);
    }
  }
//   const instance10 = new Counter1();
//   console.log(instance10.increment());
//   const instance20 = new Counter1();
//   console.log(instance20.increment()); // now it uses the same memory
 
//after adding static to class method i.e function | 
console.log(Counter1.increment());
console.log(Counter1.increment());
 
}
