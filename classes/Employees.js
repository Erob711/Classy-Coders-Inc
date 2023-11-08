class Employees {
  //variables
  #salary;
  #isHired = true;

  static #allEmployees = [];

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired;
    Employees.#allEmployees.push(this);
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

}

module.exports = {
  Employees,
};
