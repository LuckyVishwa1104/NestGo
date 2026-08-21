import { Controller, Get, Param, } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    // dependency injection
    constructor (private readonly userService : UserService) {};

    @Get()
    getAllUser(){
        // const userService = new UserService();
        return this.userService.getAllUser();
    }

    @Get(":id")
    getUser(@Param('id') id: String){
        // const userService = new UserService();
        return this.userService.getUser(+id);
    }


    /*
    GET (user/) - retrun all users
    GET (user/:id) - return specific user
    POST (user) - add a user
    */

    // in controller we chekc whether the paylod is correctly passed if not then it will give respective error else it will pass to service for logic processsing
}
