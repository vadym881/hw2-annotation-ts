import { Course } from "./models/course.ts";
import { Group } from "./models/group.ts";
import { GenderEnum, InfoType } from "./models/person.ts";
import { Student } from "./models/student.ts";
import { Teacher } from "./models/teacher.ts";

const vadymInfo: InfoType = {
  firstName: "Vadym",
  lastName: "iaroshenko",
  birthDay: new Date(2009, 9, 21),
  gender: GenderEnum.Male,
  email: "email@gmail.com",
  phone: "555",
};
const vadym = new Student(vadymInfo);
console.log(vadym);

const teacherInfo = {
  firstName: "Sergiy",
  lastName: "lastName",
  birthDay: new Date(2000, 9, 21),
  gender: GenderEnum.Male,
  email: "email@gmail.com",
  phone: "555",
};
const teacher = new Teacher(teacherInfo);
console.log(teacher);

const typescript = new Course("TypeScript", "Computer Science", 50);
console.log(typescript);

const ts_2024_12 = new Group("TS-2024-12", typescript, teacher);
ts_2024_12.addStudent(vadym);
//ts_2024_12.addStudent(vadym)
console.log(ts_2024_12);
