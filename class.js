class Car {
  constructor(name, enginee, wheels) {
    // member vars , instance vars
    this.name = name;
    this.enginee = enginee;
    this.wheels = wheels;
  }
  sound() {
    // instace or member functions or methods
    console.log("Vroom Vroom");
  }
}
const Ferrari = new Car("Ferrari", "V8", 4);
const MercedesBenz = new Car("Mercedes-Benz ", "V10", 4);
const lamborghini = new Car("lamborghini", "LDW 702M", 4);
const Audi = new Car("Audi", "2.5l R5-TFS", 4);
console.log(Ferrari);
console.log(MercedesBenz);
console.log(typeof Car);
console.log(Ferrari.sound());

// Bank Class
class Bank {
  //making it private var
  // #balance;
  static count = 0;
  static intrest = 0;
  constructor(accNo, name, balance) {
    this.accNo = accNo;
    this.name = name;
    this.balance = balance;
    this.transactions = [];
    Bank.count += 1;
    Bank.intrest = 0;
  }
  static getCount() {
    return `No Of Bank Accounts are ${Bank.count}`;
  }
  applyIntrest() {
    this.balance *= this.balance;
    return `Balance is ${this.balance}`;
  }
  getTransaction() {
    return this.transactions;
  }
  transaction(type, amount) {
    this.transactions.push({
      id: this.transactions.length + 1,
      date: new Date(),
      type,
      amount,
    });
  }
  displayBalance() {
    const formateBalance1 = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(this.balance);
    return `${this.name} your balance is ${formateBalance1}`;
  }

  WithDraw(amount) {
    if (amount > this.balance) {
      return `insufficient funds😢`;
    }
    this.balance -= amount;
    this.transaction("WithDraw", amount);
    return this.displayBalance();
  }
  deposite(amount) {
    if (amount <= 0) {
      return "invalid amount";
    } else this.balance += amount;

    this.transaction("Deposite", amount);
    return `transaction is successful, ${this.displayBalance()}`;
  }
}
class SavingsAccount extends Bank {
  intrest = 0.06;
  applyIntrest() {
    this.balance += this.balance * this.intrest * 12;
    return `Balance is ${this.balance}`;
  }
}
class CurrentAccount extends Bank {
  WithDraw(amount) {
    if (amount > this.balance) {
      return `insufficient funds😢`;
    }
    this.balance -= amount - 10;
    this.transaction("WithDraw", amount);
    return this.displayBalance();
  }
}
const Akhila = new Bank("101", "Akhila", 1_00_000);
const Akshya = new Bank("102", "akshya", 70_000);
const Sumana = new Bank("103", "Sumana", 60_000);
const Summi = new Bank("104", "summi", 1_00_000);
const SriLekha = new Bank("105", "srilekha", 1_00_000);
const Harshu = new SavingsAccount("106", "Harshitha", 1_00_000);
const Chikku = new CurrentAccount("107", "Chikku", 100);
console.log(Chikku.WithDraw(10));
console.log(Harshu.applyIntrest());
console.log(Akhila);
console.log(Akshya);
console.log(Sumana);
console.log(Summi);
console.log(SriLekha);
// console.log(Akhila.balance);
console.log(Akhila.displayBalance());
console.log(Akhila.WithDraw(50_000));
console.log(Akhila.WithDraw(50_000));
console.log(Akhila.deposite(10_000));
console.log(Sumana.WithDraw(10_000));
console.log(Akhila.deposite(10_000));

console.log(Akhila.getTransaction());

console.log(Bank.getCount());
console.log(Akhila.displayBalance());
console.log(Akhila.applyIntrest());

// window.fname = "abc";
// window.lname = "adj";
// const stu4 = {
//   fname: "bhanu",
//   lname: "sri",
//   fullName: () => {
//     return `${this.fname}, ${this.lname}`;
//   },
// };
// fullName2 = () => {
//   return `${this.fname} , ${this.lname}`;
// };
// console.log(stu4.fullName());
// console.log(fullName2.call(stu4));
// console.log(fullName2.apply(stu4));

// const luffy = {
//   name: "Monkey D. Luffy",
//   crew: "Straw Hat Pirates",
//   actions: {
//     gearSecond: function () {
//       console.log(`${this.name} activates Gear Second!`); // undefined

//       function attack() {
//         console.log(`${this.name} attacks with Gomu Gomu no Jet Pistol!`);
//       }

//       attack(); // undefined
//     },
//     gearFourth: function () {
//       console.log(`${this.name} activates Gear Fourth!`); // undefined

//       const attack = () => {
//         console.log(`${this.name} attacks with Gomu Gomu no Kong Gun!`);
//       };

//       attack(); // undefined
//     },
//     crewShout: () => {
//       console.log(`Crew Shout: ${this.crew} cannot be accessed here.`); // undefined
//     },
//   },
// };

// // What happens? Clue: Change Context
// // luffy.actions.gearSecond();
// // luffy.actions.gearFourth();
// // luffy.actions.crewShout();
// luffy.actions.gearSecond.call(luffy);
// luffy.actions.gearFourth.call(luffy);
// luffy.actions.crewShout.call(luffy);
// // read /write of private var ❌
// // this.#balance=800000000000// error
// // Encaplusation
// // member var and methods are put together in class-encalpulates data and logic together and tells the access part
// // class=>data+method+access

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "some sound";
  }
}
class Dog extends Animal {
  speak() {
    // overridding the methods
    return "woof woof";
  }
}
const toby = new Animal("toby");
const jimmy = new Dog("jimmy");
jimmy.speak();
