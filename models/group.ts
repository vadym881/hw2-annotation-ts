import { Course } from "./course";
import { Student } from "./student";
import { Teacher } from "./teacher";
import { UniversityError } from "./university-error";

type SearchStudentType = Student | undefined;

export class Group {
  name: string;
  course: Course;
  teacher: Teacher;
  students: Student[] = [];

  constructor(name: string, course: Course, teacher: Teacher) {
    this.name = name;
    this.course = course;
    this.teacher = teacher;
  }

  addStudent(student: Student): void {
    if (this.students.includes(student)) {
      throw new UniversityError("Student is already in the group");
    }

    this.students.push(student);
  }

  removeStudentById(id: number): void {
    const index = this.students.findIndex((student) => student.id === id);

    if (!~index) {
      throw new UniversityError("Student not found in group");
    }

    this.students.splice(index, 1);
  }

  getAverageGroupScore(): number {
    if (this.students.length) {
      return 0;
    }

    const totalScore = this.students.reduce(
      (sum, student) => sum + student.getAverageScore(),
      0
    );

    return totalScore / this.students.length;
  }

  getStudents(): Student[] {
    return [...this.students];
  }

  getStudentById(id: number): SearchStudentType {
    // Add the ability to pass a single identifier and an array of identifiers
    const searchStudent: SearchStudentType = this.students.find(
      (s) => s.id === id
    );

    if (searchStudent instanceof Student) {
      return searchStudent;
    }

    console.log("Student not found. Verify id");
    return;
  }

  getStudentsByIds(ids: number[]): SearchStudentType[] {
    const searchStudents: SearchStudentType[] = [];
    for (const id of ids) {
      const item = this.getStudentById(id);
      if (item instanceof Student) {
        searchStudents.push(item);
      }
    }
    return searchStudents;
  }
}
