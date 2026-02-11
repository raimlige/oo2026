class Course {
    constructor(protected credits: number) { }

    //method including the formula to calculate the GPA
    //formula is: grade x credits
    gpaContribution(grade: number): number {
        return grade * this.credits
    }
    getCredits(): number {
        return this.credits;
    }
}

//defining the courses and credits
let math = new Course(4);
let english = new Course(6);
let programming = new Course(2);

//variables for calculating
let mathGrade = 4.0;
let englishGrade = 3.3;
let programmingGrade = 3.7;
let totalPoints = 0;

totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);

let totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();

let gpa = totalPoints / totalCredits
console.log("Your GPA is: ", Math.round(gpa * 10) / 10);

//Creating an array to pass grades of several students
let studentsGrades = [
    { name: "Alice", math: 4.0, english: 3.3, programming: 3.7 },
    { name: "Jordan", math: 3.1, english: 2.7, programming: 3.9 },
    { name: "Bob", math: 3.3, english: 3.8, programming: 2.5 },
    { name: "Charlie", math: 1.3, english: 2.8, programming: 3.0 },
];
//calculating the gpa for each student
for (let student of studentsGrades) {
    let totalPoints = 0;
    totalPoints += math.gpaContribution(student.math)
    totalPoints += english.gpaContribution(student.english)
    totalPoints += programming.gpaContribution(student.programming)

    let gpa = totalPoints / totalCredits
    console.log(student.name + " GPA: ", Math.round(gpa * 10) / 10);
};