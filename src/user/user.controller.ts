import { Controller, Get, Post, NotFoundException, Param, Body, ParseIntPipe, } from '@nestjs/common';
import { UserService } from './user.service';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { UserDto } from './dto/user.dto';

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
    getUser(@Param('id', ParseIntPipe) id: number){
        // const userService = new UserService();

        try{
        return this.userService.getUser(+id);
        }catch (error){
            throw new NotFoundException(error.message);
        }
    }

    @Post()
    addUser(@Body() user: UserDto){
        return this.userService.addUser(user);
    }


    /*
    GET (user/) - retrun all users
    GET (user/:id) - return specific user
    POST (user) - add a user
    */

    // in controller we chekc whether the paylod is correctly passed if not then it will give respective error else it will pass to service for logic processsing
}
