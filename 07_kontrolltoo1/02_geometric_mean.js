//Create a class that stores a person's salary in the first working year.
//With a command, you can add a salary change coefficient for each year.
//For example, 0.95 = 5% decrease
//The user can query the salary in the first working year.
//Also allow querying the salaries assuming that the annual coefficient, for every year, equal to the geometric mean calculated in the last point.
var Salary = /** @class */ (function () {
    function Salary(firstYearSalary, years) {
        this.firstYearSalary = firstYearSalary;
        this.years = years;
        this.coefficients = [];
    }
    Salary.prototype.showFirstYear = function () {
        return this.firstYearSalary;
    };
    Salary.prototype.addCoefficient = function (coef) {
        this.coefficients.push(coef);
    };
    Salary.prototype.getSalaries = function () {
        var _a;
        var salaries = [this.firstYearSalary];
        for (var i = 1; i < this.years; i++) {
            var coef = (_a = this.coefficients[i - 1]) !== null && _a !== void 0 ? _a : 1;
            var newSalary = salaries[i - 1] * coef;
            salaries.push(Math.round(newSalary * 100) / 100);
        }
        return salaries;
    };
    Salary.prototype.getGeometricMean = function () {
        if (this.coefficients.length === 0)
            return 1;
        var product = this.coefficients.reduce(function (acc, val) { return acc * val; }, 1);
        return Math.pow(product, 1 / this.coefficients.length);
    };
    Salary.prototype.getSalariesWithMean = function () {
        var mean = this.getGeometricMean();
        var salaries = [this.firstYearSalary];
        for (var i = 1; i < this.years; i++) {
            salaries.push(Math.round((salaries[i - 1] * mean) * 100) / 100);
        }
        return salaries;
    };
    return Salary;
}());
/*
let salary1;
salary1 = new Salary(1500, 3);
console.log("--- First salary ---")
console.log(salary1.showFirstYear());
salary1.addCoefficient(0.95);
salary1.addCoefficient(1.10);
salary1.addCoefficient(1.02);
console.log("Salaries with different coeffiecents", salary1.getSalaries());
console.log("Geometric mean of coeffiecents", salary1.getGeometricMean());
console.log("Salaries with the mean of the given coefficents", salary1.getSalariesWithMean());


let salary2;
salary2 = new Salary(2000, 7);
console.log("--- Second salary ---")
console.log(salary2.showFirstYear());
salary2.addCoefficient(0.75);
salary2.addCoefficient(1.15);
console.log("Salaries with different coeffiecents", salary2.getSalaries());
console.log("Geometric mean of coeffiecents", salary2.getGeometricMean());
console.log("Salaries with the mean of the given coefficents", salary2.getSalariesWithMean());
*/ 
