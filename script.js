// defines the Budget class
class Budget {
  constructor() {
    this.income = []; // array to store income
    this.expenses = []; // array to store expenses
    this.totalIncome = 0; // total income
    this.totalExpenses = 0; // total expenses
  }

  // method to add income
  addIncome(description, amount) {
    if (description && amount > 0) { // validates input
      this.income.push({ description, amount }); // adds income
      this.totalIncome += amount; // updates total income
      this.updateUI(); // updates UI
    } else {
      console.error('Invalid income input'); //handles invalid input
    }
  }

  // method to add expense
  addExpense(description, amount) {
    if (description && amount > 0) { // validates the input
      this.expenses.push({ description, amount }); // adds expense
      this.totalExpenses += amount; // updates total expenses
      this.updateUI(); // updates UI
    } else {
      console.error('Invalid expense input'); // handles invalid input
    }
  }

  // method to reset income and expenses
  reset() {
    this.income = []; // resets income
    this.expenses = []; // resets expenses
    this.totalIncome = 0; // resets total income
    this.totalExpenses = 0; // resets total expenses
    this.updateUI(); // updates UI
  }

  // method to calculate total
  calculateTotal(arr) {
    return arr.reduce((total, item) => total + item.amount, 0);
  }

  // method to update UI
  updateUI() {
    // display total income / expenses / budget
    document.getElementById('total-income').innerText = this.totalIncome;
    document.getElementById('total-expenses').innerText = this.totalExpenses;
    document.getElementById('total-budget').innerText = this.totalIncome - this.totalExpenses;
  }
}

const budget = new Budget(); // creates new Budget object

// test data
budget.addExpense('Rent', 0);
budget.addExpense('Groceries', 0);
budget.addExpense('Utilities', 0);
budget.updateUI(); // updates UI