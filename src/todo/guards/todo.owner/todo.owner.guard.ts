import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TodoService } from 'src/todo/todo.service';

@Injectable()
export class TodoOwnerGuard implements CanActivate {
  constructor (private readonly todoService: TodoService){};
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const userId = '1';
    const todoUserId = req.param.id;
    const todo = this.todoService.getTodo(todoUserId);
    return userId === todo.userId;
  }
}
