export type RoleType = "student" | "teacher";
export enum GenderEnum {
  "Male",
  "Female",
  "Other",
}

type PersonInfoType = {
  firstName: string;
  lastName: string;
  birthDay: Date;
  gender: GenderEnum;
};
type ContactInfoType = { email: string; phone: string };
export type FullPersonInfoType = PersonInfoType & ContactInfoType;

// export type FullPersonInfoType = {
//   firstName: string;
//   lastName: string;
//   birthDay: Date;
//   gender: GenderEnum;
//   email: string;
//   phone: string;
// };

export class Person {
  static nextId = 1;

  firstName: string;
  lastName: string;
  birthDay: Date;
  id: number;
  gender: GenderEnum;
  contactInfo: { email: string; phone: string };
  role: RoleType;

  constructor(info: FullPersonInfoType, role: RoleType) {
    const { firstName, lastName, birthDay, gender, email, phone } = info;

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = birthDay;
    this.id = Person.nextId++;
    this.gender = gender;
    this.contactInfo = { email, phone };
    this.role = role;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  get age(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDay.getFullYear();
    const monthDiff = today.getMonth() - this.birthDay.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < this.birthDay.getDate())
    ) {
      age--;
    }

    return age;
  }
}
