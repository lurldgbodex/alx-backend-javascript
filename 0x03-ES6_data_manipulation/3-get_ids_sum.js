export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id, 0,
    );
  }
  return 0;
}
