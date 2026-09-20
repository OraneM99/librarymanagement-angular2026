import { Component, inject } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.html',
})
export class BookList {
  private readonly bookService = inject(BookService);

  books = this.bookService.getBooks();

  borrowBook(id: number): void {
    const success = this.bookService.borrowBook(id);
    if (!success) {
      alert('No copies available to borrow.');
    }
  }

  returnBook(id: number): void {
    const success = this.bookService.returnBook(id);
    if (!success) {
      alert('All copies are already returned.');
    }
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }
}
