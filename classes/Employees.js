class Employees {
  //variables
  #salary;
  #isHired = true;

  static #allEmployees = [];

  constructor(name, position, salary, metrics) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired;
    this.metrics = metrics;
    this.evaluation = '';
    Employees.#allEmployees.push(this);
  }

  calculatePerformance(metrics) {
    //beats 
    if (this.metrics == 'Beat Expectations') {
        this.evaluation = 'Consider for Promotion.';
    //meets 
    } else if (this.metrics == 'Met Expectations') {
        this.evaluation = 'Do not Fire.';
    //misses
    } else {
        this.evaluation = 'Probably fire them.';
    }
    
  }


  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    if(amount < 0){
      throw new Error("Salary cannot be negative");
    }
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command == "hire") {
      this.#isHired = true;
    } else if (command == "fire") {
      this.#isHired = false;
    }
  }

  static getEmployees(){
    return Employees.#allEmployees;
  }

  static getTotalPayroll(){
    return Employees.#allEmployees.reduce((total, employee) => total + employee.getSalary(), 0)
  }

  promote(title, newSalary) {
    this.position = title;
    this.#salary = newSalary;
  }

}

module.exports = {
  Employees,
};
