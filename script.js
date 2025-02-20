// Person Class
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee Class (inherits from Person)
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call parent constructor
    this.jobTitle = jobTitle;
}

// Inherit from Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// DOM Manipulation
document.getElementById("createPerson").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    
    if (name && age) {
        const person = new Person(name, age);
        person.greet();
        document.getElementById("output").innerText = `Person Created: ${person.name}, Age: ${person.age}`;
    }
});

document.getElementById("createEmployee").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const jobTitle = document.getElementById("jobTitle").value;
    
    if (name && age && jobTitle) {
        const employee = new Employee(name, age, jobTitle);
        employee.jobGreet();
        document.getElementById("output").innerText = `Employee Created: ${employee.name}, Age: ${employee.age}, Job Title: ${employee.jobTitle}`;
    }
});

// Do not change the code below
window.Person = Person;
window.Employee = Employee;
