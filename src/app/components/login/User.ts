/**
 * Created by lev on 24.05.17.
 */
export class User {
  login: string;
  password: string;
  isAllFieldFullfield = (): boolean => !!this.login && !!this.password;
  testTime = [];
}

