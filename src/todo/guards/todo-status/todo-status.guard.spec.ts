import { TodoStatusGuard } from './todo-status.guard';

describe('TodoStatusGuard', () => {
  it('should be defined', () => {
    expect(new TodoStatusGuard()).toBeDefined();
  });
});
