import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {

  // dependecy injection of todo service
  constructor(private readonly todoService: TodoService) {}

  // pipe - controller - service
  // get all todo
  @Get()
  getAllTodo(){
    return this.todoService.getAllTodo();
  }

  // get specific todo
  // pipe - used to validate and transfor request parameter data
  @Get(":id")
  getTodo(@Param('id', ParseIntPipe) id: number){
    try{
      return this.todoService.getTodo(+id);
    }
    catch(error){
      throw new NotFoundException(error.message);
    }
  }

  // add todo
  @Post()
  addTodo(@Body() todo: TodoDto){
    return this.todoService.addTodo(todo);  
  }

}