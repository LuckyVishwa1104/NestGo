import { TodoOwnerGuard } from './todo.owner.guard';

describe('TodoOwnerGuard', () => {
  it('should be defined', () => {
    expect(new TodoOwnerGuard()).toBeDefined();
  });
});
