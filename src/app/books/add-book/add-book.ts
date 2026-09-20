import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  private readonly bookService = inject(BookService);
  private readonly router = inject(Router);

  title = '';
  author = '';
  totalCopies = 0;

  addBook(): void {
    const newBook: Book = {
      id: Math.floor(Math.random() * 1000),
      title: this.title,
      author: this.author,
      availableCopies: this.totalCopies,
      totalCopies: this.totalCopies,
    };

    this.bookService.addBook(newBook);
    this.title = '';
    this.author = '';
    this.totalCopies = 0;
    void this.router.navigate(['']);
  }
}
