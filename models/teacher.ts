import { Course } from "./course";
import { FullPersonInfoType, Person } from "./person";

export class Teacher extends Person {
  specializations = [];
  courses: Course[] = [];

  constructor(info: FullPersonInfoType, specializations = []) {
    super(info, "teacher");
    this.specializations = specializations;
  }

  assignCourse(course: Course): void {
    this.courses.push(course);
  }

  removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.name !== courseName);
  }

  getCourses(): Course[] {
    return [...this.courses];
  }
}
