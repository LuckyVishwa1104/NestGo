import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';

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
  getBook(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.bookService.getBook(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // add new book
  @Post()
  addBook(@Body() book: BookDto) {
    return this.bookService.addBook(book);
  }
}
