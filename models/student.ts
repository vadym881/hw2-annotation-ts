import { Course } from "./course.ts";
import { InfoType, Person } from "./person.ts";
import { UniversityError } from "./university-error.ts";

type StatusType = "active" | "academic leave" | "graduated" | "expelled";

export class Student extends Person {
  academicPerformance = {
    totalCredits: 0,
    gpa: 0,
  };
  enrolledCourses: Course[] = [];
  status: StatusType;

  constructor(info: InfoType) {
    super(info, "student");
    this.status = "active";
  }

  enrollCourse(course: Course): void {
    if (this.status !== "active") {
      throw new UniversityError(
        "Cannot enroll: Student is not in active status"
      );
    }

    this.enrolledCourses.push(course);
    this.academicPerformance.totalCredits += course.credits;
  }

  getAverageScore(): number {
    return this.academicPerformance.gpa;
  }

  updateAcademicStatus(newStatus: StatusType): void {
    this.status = newStatus;
  }

  getEnrolledCourses(): Course[] {
    return [...this.enrolledCourses];
  }
}
