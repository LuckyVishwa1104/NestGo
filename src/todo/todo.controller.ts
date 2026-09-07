import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { TodoStatusGuard } from './guards/todo-status/todo-status.guard';
import { TodoOwnerGuard } from './guards/todo.owner/todo.owner.guard';

@Controller('todo')
export class TodoController {

  // dependecy injection of todo service
  constructor(private readonly todoService: TodoService) {}

  // pipe - controller - service
  // get all todo
  @Get()
  getAllTodo() {
    return this.todoService.getAllTodo();
  }

  // get specific todo
  // pipe - used to validate and transform request parameter data
  @Get(':id')
  @UseGuards(TodoOwnerGuard)
  getTodo(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.todoService.getTodo(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // add todo
  // guard - pipe - controller - service
  @Post()
  @UseGuards(TodoStatusGuard)
  addTodo(@Body() todo: TodoDto) {
    return this.todoService.addTodo(todo);
  }
  
}
