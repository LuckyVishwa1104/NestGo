import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { truncate } from 'fs';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // get all book
  @Get()
  getAllBook() {
    return this.bookService.getAllBook();
  }

  // get book
  @Get(':id')

  // Pipe - used to transform and validate param data
  // for validator we need to dev dependency - class-validator and class-transformer
  getBook(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.bookService.getBook(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // add new book
  @Post()
  addBook(@Body(new ValidationPipe({transform : true})) book: BookDto) {
    return this.bookService.addBook(book);
  }
}
