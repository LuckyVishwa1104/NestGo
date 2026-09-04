import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  // mock test data
  private books = [
    {
      id: 1,
      title: "Can't Hurt Me",
      author: 'David Gogging',
    },
    {
      id: 2,
      title: 'Metamorphosis',
      author: 'Franz Kafka',
    },
  ];

  // get all books
  getAllBook() {
    return this.books;
  }

  // get specific book
  getBook(id: number) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error('Book not found!');
    }
    return book;
  }

  // add new book
  addBook(book: BookDto){
    const id  = Date.now();
    this.books.push({
        id,
        ...book,
    });

    return this.getBook(id);
  }
}
