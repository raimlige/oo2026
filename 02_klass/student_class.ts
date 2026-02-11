class Student {
    constructor(protected mathGrade: number, protected englishGrade: number) { }
    //this method is to show the protected grades
    show(): void {
        console.log(this.mathGrade, this.englishGrade);
    };
    //method to calculate the average
    average(): number {
        return ((this.mathGrade + this.englishGrade) / 2)
    }
    //Method to add the grades of same subject
    add(other: Student): Student {
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    //method to caluclate the average of 2 students (also possible to breakdown to separate parts(english and math) and use combine to 2 results together)
    average2(other: Student): Student {
        return new Student(((this.mathGrade + other.mathGrade) / 2), ((this.englishGrade + other.englishGrade) / 2));
    };

    //method to improve the math grade
    improveMath(): void {
        this.mathGrade += 5
    };
    //method to calculate average
    averageMath(count: number): number {
        return this.mathGrade / count;
    };
};
let s1: Student = new Student(85, 92);
let s2: Student = new Student(70, 95);

//creating an array of students
let students: Student[] = [
    new Student(80, 85),
    new Student(77, 65),
    new Student(62, 81),
    new Student(55, 94),
];
//combine all students into one total
let classTotal = students[0];
for (let i = 1; i < students.length; i++) {
    classTotal = classTotal.add(students[i]);
}
//number of students in the class
const n = students.length;
//console.log("The class average is ", classTotal.averageMath(n));


//console.log(s1.mathGrade, s1.englishGrade);
s1.show();
console.log("This student's (s1) average is: " + s1.average());

//test adding other student grades
let combined_grades = s1.add(s2);
combined_grades.show();

let combined_averages = s1.average2(s2);
combined_averages.show();

s1.improveMath();
s1.show();


