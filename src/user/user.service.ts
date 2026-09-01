import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

  // mock user list
  private users = [
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
    return this.users;
  }

  // return specific user
  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);

    if(!user){
      throw new Error("User not found!");
    }

    return user;
  }

  // add a new use to the list 
  addUser(user: UserDto){
    const id = Date.now();
    this.users.push({
      id,
      ...user,
    }
    )

    return this.getUser(id);

  }

}
