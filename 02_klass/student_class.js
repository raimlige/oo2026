var Student = /** @class */ (function () {
    function Student(mathGrade, englishGrade) {
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
    }
    //this method is to show the protected grades
    Student.prototype.show = function () {
        console.log(this.mathGrade, this.englishGrade);
    };
    ;
    //method to calculate the average
    Student.prototype.average = function () {
        return ((this.mathGrade + this.englishGrade) / 2);
    };
    //Method to add the grades of same subject
    Student.prototype.add = function (other) {
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    ;
    //method to caluclate the average of 2 students (also possible to breakdown to separate parts(english and math) and use combine to 2 results together)
    Student.prototype.average2 = function (other) {
        return new Student(((this.mathGrade + other.mathGrade) / 2), ((this.englishGrade + other.englishGrade) / 2));
    };
    ;
    //method to improve the math grade
    Student.prototype.improveMath = function () {
        this.mathGrade += 5;
    };
    ;
    //method to calculate average
    Student.prototype.averageMath = function (count) {
        return this.mathGrade / count;
    };
    ;
    return Student;
}());
var s1 = new Student(85, 92);
var s2 = new Student(70, 95);
//creating an array of students
var students = [
    new Student(80, 85),
    new Student(77, 65),
    new Student(62, 81),
    new Student(55, 94),
];
//combine all students into one total
var classTotal = students[0];
for (var i = 1; i < students.length; i++) {
    classTotal = classTotal.add(students[i]);
}
//number of students in the class
var n = students.length;
console.log("The class average is ", classTotal.averageMath(n));
//console.log(s1.mathGrade, s1.englishGrade);
s1.show();
console.log("This student's (s1) average is: " + s1.average());
//test adding other student grades
var combined_grades = s1.add(s2);
combined_grades.show();
var combined_averages = s1.average2(s2);
combined_averages.show();
s1.improveMath();
s1.show();
