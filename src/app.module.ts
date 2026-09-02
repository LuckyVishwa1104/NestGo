import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [UserModule, BookModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
