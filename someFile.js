function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("id1").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(first_name, last_name, age, phone_number, state, zip_code, occupation, hourly_wage) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.phone_number = phone_number;
        this.state = state;
        this.zip_code = zip_code;
        this.occupation = occupation;
        this.hourly_wage = hourly_wage;
    }
    Person.prototype.fullName = function () {
        var fullName = this.first_name + " " + this.last_name;
        return fullName;
    };
    Person.prototype.nameAndNumber = function () {
        var nameAndNumber = this.first_name + " " + this.last_name + " " + this.phone_number;
        return nameAndNumber;
    };
    Person.prototype.location = function () {
        var location = this.state + ", " + this.zip_code;
        return location;
    };
    Person.prototype.weeklyWage = function (hours) {
        var weeklyWage;
        if (hours != undefined) {
            weeklyWage = hours * this.hourly_wage;
            return weeklyWage;
        }
        weeklyWage = this.hourly_wage * 40;
        return weeklyWage;
    };
    Person.prototype.certifications = function (certs) {
        var totalCerts = certs.split(",");
        return totalCerts;
    };
    return Person;
}());
function createPerson(obj) {
    return obj;
}
var person1 = new Person("Patrick", "Jane", 42, "919-222-1234", "CA", 66240, "Mentalist", 40);
var person2 = new Person("Teresa", "Lisbon", 36, "919-333-1234", "CA", 66240, "Agent", 50);
document.getElementById("Person1Name").innerHTML = person1.fullName();
document.getElementById("Person2Name").innerHTML = person2.fullName();
document.getElementById("Person1Number").innerHTML = person1.nameAndNumber();
document.getElementById("Person2Number").innerHTML = person2.nameAndNumber();
document.getElementById("Location1").innerHTML = person1.first_name + " lives in: " + person1.location();
document.getElementById("Location2").innerHTML = person2.first_name + " lives in: " + person2.location();
document.getElementById("Wage1").innerHTML = person1.first_name + "'s wage: $" + person1.weeklyWage(20);
document.getElementById("Wage2").innerHTML = person2.first_name + "'s wage: $" + person2.weeklyWage(20);
