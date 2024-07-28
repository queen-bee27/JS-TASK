// Creating a personAccount object
const personAccount = {
    firstName: 'Alice',
    lastName: 'Johnson',
    incomes: [
      { description: 'Salary', amount: 5000 },
      { description: 'Freelance', amount: 1500 }
    ],
    expenses: [
      { description: 'Rent', amount: 1200 },
      { description: 'Groceries', amount: 300 }
    ],
    totalIncome: function() {
      return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    },
    totalExpense: function() {
      return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    },
    accountInfo: function() {
      return `${this.firstName} ${this.lastName} has a total income of ${this.totalIncome()} and total expenses of ${this.totalExpense()}.`;
    },
    addIncome: function(description, amount) {
      this.incomes.push({ description, amount });
    },
    addExpense: function(description, amount) {
      this.expenses.push({ description, amount });
    },
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Converting the personAccount object to a JSON string
  const personAccountJSON = JSON.stringify(personAccount);
  
  // Storing the personAccount object in localStorage
  localStorage.setItem('personAccount', personAccountJSON);
  
  // Retrieving and parsing the personAccount object from localStorage to verify
  const retrievedPersonAccountJSON = localStorage.getItem('personAccount');
  const retrievedPersonAccount = JSON.parse(retrievedPersonAccountJSON);
  
  // Verifying methods still work
  console.log(retrievedPersonAccount.accountInfo()); // Method will not work directly after retrieval
  console.log(retrievedPersonAccount.totalIncome()); // This will throw an error
  
  // Re-adding methods to the retrieved object
  retrievedPersonAccount.totalIncome = function() {
    return this.incomes.reduce((acc, income) => acc + income.amount, 0);
  };
  
  retrievedPersonAccount.totalExpense = function() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  };
  
  retrievedPersonAccount.accountInfo = function() {
    return `${this.firstName} ${this.lastName} has a total income of ${this.totalIncome()} and total expenses of ${this.totalExpense()}.`;
  };
  
  retrievedPersonAccount.addIncome = function(description, amount) {
    this.incomes.push({ description, amount });
  };
  
  retrievedPersonAccount.addExpense = function(description, amount) {
    this.expenses.push({ description, amount });
  };
  
  retrievedPersonAccount.accountBalance = function() {
    return this.totalIncome() - this.totalExpense();
  };
  
  // Verifying the methods work again
  console.log(retrievedPersonAccount.accountInfo());
  