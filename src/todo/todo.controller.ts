import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {

  // dependecy injection of todo service
  constructor(private readonly todoService: TodoService) {}

  // get all todo
  @Get()
  getAllTodo(){
    return this.todoService.getAllTodo();
  }

  // get specific todo
  @Get(":id")
  getTodo(@Param('id') id: string){

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
