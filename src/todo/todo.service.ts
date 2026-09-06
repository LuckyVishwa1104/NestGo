import { Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  private todos = [
    {
      id: 1,
      title: 'Todo 1',
      body: 'Body for Todo1',
      userId: '1'
    },
    {
      id: 2,
      title: 'Todo 2',
      body: 'Body for Todo2',
      userId: '1'
    },
  ];

  // get all todo
  getAllTodo() {
    return this.todos;
  }

  // get specific todo
  getTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found.');
    }
    return todo;
  }

  // add new todo
  addTodo(todo: TodoDto) {
    const id = Date.now();
    this.todos.push({
      id,
      ...todo,
      userId: '1'
    });

    return this.getTodo(id);
  }
}
