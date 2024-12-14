type DisciplinesType =
  | "Computer Science"
  | "Mathematics"
  | "Physics"
  | "Biology"
  | "Chemistry";

export class Course {
  name: string;
  credits: number;
  discipline: DisciplinesType;

  constructor(name: string, discipline: DisciplinesType, credits: number) {
    this.name = name;
    this.credits = credits;
    this.discipline = discipline;
  }
}
