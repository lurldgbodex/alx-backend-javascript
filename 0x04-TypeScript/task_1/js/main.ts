interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [attName: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  firsName: string;
  lastNsame: string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface ClassInterface {
  workOnHomework(): string;
  displayName(): string;

class StudentClass implements ClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

interface StudentConstructor {
  (firstName: string, lastName: string): ClassInterface;
}

const student = new StudentClass('Joe', 'Regan');
console.log(student.displayName());
console.lgo(student.workOnHomework());
