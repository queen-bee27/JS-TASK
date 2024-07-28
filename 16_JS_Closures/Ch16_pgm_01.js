// Create a closure which has one inner function
function outerFunction() {
    let count = 0;
  
    function innerFunction() {
      count++;
      return count;
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  console.log(closure()); // 1
  console.log(closure()); // 2
  console.log(closure()); // 3

  // Create a closure which has three inner functions
  function outerFunction() {
    let count = 0;
  
    function increment() {
      count++;
      return count;
    }
  
    function decrement() {
      count--;
      return count;
    }
  
    function getCount() {
      return count;
    }
  
    return {
      increment,
      decrement,
      getCount
    };
  }
  
  const counter = outerFunction();
  console.log(counter.increment()); // 1
  console.log(counter.increment()); // 2
  console.log(counter.decrement()); // 1
  console.log(counter.getCount()); // 1
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
function personAccount(firstname, lastname) {
    let incomes = [];
    let expenses = [];
  
    function totalIncome() {
      return incomes.reduce((sum, income) => sum + income.amount, 0);
    }
  
    function totalExpense() {
      return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }
  
    function accountInfo() {
      return `Name: ${firstname} ${lastname}\nTotal Income: $${totalIncome()}\nTotal Expense: $${totalExpense()}`;
    }
  
    function addIncome(amount, description) {
      incomes.push({ amount, description });
    }
  
    function addExpense(amount, description) {
      expenses.push({ amount, description });
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance
    };
  }
  
  const myAccount = personAccount('John', 'Doe');
  myAccount.addIncome(1000, 'Salary');
  myAccount.addIncome(200, 'Freelance');
  myAccount.addExpense(500, 'Rent');
  myAccount.addExpense(100, 'Groceries');
  
  console.log(myAccount.accountInfo());
  // Name: John Doe
  // Total Income: $1200
  // Total Expense: $600
  
  console.log(`Account Balance: $${myAccount.accountBalance()}`); // Account Balance: $600
    