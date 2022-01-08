export interface UserService {
  getUserData(): Promise<void>;
}



export class RestUserService implements UserService {
  getUserData(): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

export const UserStore = new RestUserService();