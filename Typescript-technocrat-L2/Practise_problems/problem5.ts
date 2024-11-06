{
  interface Student {
    name: string;
    age: number;
    grades: number[];
  }
  function calculateAverageGrade(student: Student) {
    return (
      student.grades.reduce((acc, curr) => acc + curr, 0) /
      student.grades.length
    );
  }
  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };
  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob);
}
