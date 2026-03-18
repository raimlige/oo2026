//Create a class that stores a person's salary in the first working year.
//With a command, you can add a salary change coefficient for each year.
//For example, 0.95 = 5% decrease
//The user can query the salary in the first working year.
//Also allow querying the salaries assuming that the annual coefficient, for every year, equal to the geometric mean calculated in the last point.

class Salary {
    protected coefficients: number[] = [];

    constructor(
        protected firstYearSalary: number,
        protected years: number
    ) { }

    showFirstYear(): number {
        return this.firstYearSalary;
    }

    addCoefficient(coef: number): void {
        this.coefficients.push(coef);
    }

    getSalaries(): number[] {
        let salaries: number[] = [this.firstYearSalary];
        for (let i = 1; i < this.years; i++) {
            const coef = this.coefficients[i - 1] ?? 1;
            const newSalary = salaries[i - 1] * coef;
            salaries.push(Math.round(newSalary * 100) / 100);
        }
        return salaries;
    }

    getGeometricMean(): number {
        if (this.coefficients.length === 0) return 1;
        const product = this.coefficients.reduce((acc, val) => acc * val, 1);
        return Math.pow(product, 1 / this.coefficients.length);
    }

    getSalariesWithMean(): number[] {
        const mean = this.getGeometricMean();
        let salaries: number[] = [this.firstYearSalary];
        for (let i = 1; i < this.years; i++) {
            salaries.push(Math.round((salaries[i - 1] * mean) * 100) / 100);
        }
        return salaries;
    }
}

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