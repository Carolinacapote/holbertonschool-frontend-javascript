export default function updateStudentGradeByCity(studentsList, city, gradesList) {
  const students = (studentsList.filter((student) => student.location === city).map((student) => {
    const [grades] = gradesList.filter((obj) => obj.studentId === student.id);
    return { ...student, grade: grades ? grades.grade : 'N/A' };
  }));
  return students;
}
