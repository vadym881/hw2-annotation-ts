import { Course } from "./models/course.ts";
import { Group } from "./models/group.ts";
import { GenderEnum, InfoType, Person } from "./models/person.ts";
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
//console.log(vadym);

const teacherInfo: typeof vadymInfo = {
  firstName: "Sergiy",
  lastName: "lastName",
  birthDay: new Date(2000, 9, 21),
  gender: GenderEnum.Male,
  email: "email@gmail.com",
  phone: "555-33-33",
};
const teacher = new Teacher(teacherInfo);
//console.log(teacher);

const typescript = new Course("TypeScript", "Computer Science", 50);
//console.log(typescript);

const ts_2024_12 = new Group("TS-2024-12", typescript, teacher);
ts_2024_12.addStudent(vadym);
//ts_2024_12.addStudent(vadym)
//console.log(ts_2024_12);

const student2Info: InfoType = {
  firstName: "Pavel",
  lastName: "Pavlov",
  birthDay: new Date(1980, 2, 26),
  gender: GenderEnum.Male,
  email: "email2@gmail.com",
  phone: "333-444-33",
};
const student2 = new Student(student2Info);
ts_2024_12.addStudent(student2);

const student3Info: InfoType = {
  firstName: "Ivan",
  lastName: "Ivanov",
  birthDay: new Date(1986, 5, 25),
  gender: GenderEnum.Male,
  email: "email3@gmail.com",
  phone: "777-222-33",
};
const student3 = new Student(student3Info);
ts_2024_12.addStudent(student3);

const getStudent = ts_2024_12.getStudentById(vadym.id);
console.log(getStudent);

const getStudents = ts_2024_12.getStudentsByIds([1, 2, 3, 4]);
console.log(getStudents);

console.log(Person.nextId)
