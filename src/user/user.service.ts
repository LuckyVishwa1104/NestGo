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
    const user = this.user.find((user) => user.id === id);

    if(!user){
      throw new Error("User not found!");
    }

    return user;
  }

  // add a new use to the list 
  // @Post

}
