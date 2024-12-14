import { Course } from "./course";
import { Group } from "./group";
import { Person, RoleType } from "./person";

export class University {
  name: string;
  courses: Course[] = [];
  groups: Group[] = [];
  people: Person[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  addGroup(group: Group): void {
    this.groups.push(group);
  }

  addPerson(person: Person): void {
    this.people.push(person);
  }

  findGroupByCourse(course: Course): Group | undefined {
    return this.groups.find((group) => group.course === course);
  }

  getAllPeopleByRole(role: RoleType): Person[] {
    switch (role) {
      case "student":
        return this.people.filter((person) => person.role === "student");
      case "teacher":
        return this.people.filter((person) => person.role === "teacher");
      default:
        return this.assertNeverRole(role);
    }
  }

  assertNeverRole(role: RoleType): never {
    throw new Error(`Unhandled role: ${role}`);
  }
}
