export class Person {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  isAllfieldsFulfilled = ():boolean => !!this.firstName && !!this.lastName && !!this.login && !!this.password;
}
