var Course = /** @class */ (function () {
    function Course(credits) {
        this.credits = credits;
    }
    //method including the formula to calculate the GPA
    //formula is: grade x credits
    Course.prototype.gpaContribution = function (grade) {
        return grade * this.credits;
    };
    Course.prototype.getCredits = function () {
        return this.credits;
    };
    return Course;
}());
//defining the courses and credits
var math = new Course(4);
var english = new Course(6);
var programming = new Course(2);
//variables for calculating
var mathGrade = 4.0;
var englishGrade = 3.3;
var programmingGrade = 3.7;
var totalPoints = 0;
totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);
var totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();
var gpa = totalPoints / totalCredits;
console.log("Your GPA is: ", Math.round(gpa * 10) / 10);
//Creating an array to pass grades of several students
var studentsGrades = [
    { name: "Alice", math: 4.0, english: 3.3, programming: 3.7 },
    { name: "Jordan", math: 3.1, english: 2.7, programming: 3.9 },
    { name: "Bob", math: 3.3, english: 3.8, programming: 2.5 },
    { name: "Charlie", math: 1.3, english: 2.8, programming: 3.0 },
];
//calculating the gpa for each student
for (var _i = 0, studentsGrades_1 = studentsGrades; _i < studentsGrades_1.length; _i++) {
    var student = studentsGrades_1[_i];
    var totalPoints_1 = 0;
    totalPoints_1 += math.gpaContribution(student.math);
    totalPoints_1 += english.gpaContribution(student.english);
    totalPoints_1 += programming.gpaContribution(student.programming);
    var gpa_1 = totalPoints_1 / totalCredits;
    console.log(student.name + " GPA: ", Math.round(gpa_1 * 10) / 10);
}
;
