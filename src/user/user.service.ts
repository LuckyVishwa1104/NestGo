import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  // mock user list
  private user = [
    {
      id: 1,
      name: 'Lucky',
      type: 'normal',
    },
    {
      id: 2,
      name: 'Nikhil',
      type: 'celebrity',
    },
  ];

  // return all users
  getAllUser() {
    return this.user;
  }

  // return specific user
  getUser(id: number) {
    return this.user.find((user) => user.id === id);
  }
}
