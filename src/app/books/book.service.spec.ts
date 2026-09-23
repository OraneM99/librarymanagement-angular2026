import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { Book } from './book';

describe('BookService', () => {
  let service: BookService;

  const book: Book = {
    id: 1,
    title: 'Test Book',
    author: 'Author',
    availableCopies: 5,
    totalCopies: 10,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should add a book correctly', () => {
    const result = service.addBook(book);
    expect(result).toBe(true);
  });

  // Test : L'ajout d'un livre sans titre ne doit pas fonctionner
  it('should not add a book without a title', () => {
    const result = service.addBook({ ...book, title: '' });
    expect(result).toBe(false);
  });

  // Test : L'ajout d'un livre ayant totalCopies à 0 ou négatif ne doit pas fonctionner
  it('should not add a book without totalCopies at 0 or negative', () => {
    const bookWithZeroCopies: Book = {
      id: 1,
      title: 'titre',
      author: 'author',
      availableCopies: 0,
      totalCopies: 0,
    };
    const bookWithNegativeCopies: Book = {
      ...bookWithZeroCopies,
      id: 2,
      totalCopies: -2,
    };

    const resultZero = service.addBook(bookWithZeroCopies);
    const resultNegative = service.addBook(bookWithNegativeCopies);

    expect(resultZero).toBe(false);
    expect(resultNegative).toBe(false);
  });

  // Test : Emprunter un livre doit décrémenter availableCopies
  it('should decrement availableCopies when borrow a book', () => {
    const result = service.borrowBook(book.id);

    expect(result).toBe(true);

    const newBook = service.getBooks().find((book) => book.id === 1);
    expect(newBook?.availableCopies).toEqual(4);
  });

  // Test : Ne pas emprunter un livre dont availableCopies est égal à 0
  it('should not borrow a book when availableCopies is zero', () => {
    const newBook: Book = {
      id: 3,
      title: 'title',
      author: 'author',
      availableCopies: 0,
      totalCopies: 0,
    };

    const result = service.borrowBook(newBook.id);
    expect(result).toBe(false);
  });

  // Test : Ne pas emprunter un livre qui n'existe pas
  it('should not borrow a book if it does exists', () => {
    const result = service.borrowBook(5);
    expect(result).toBe(false);
  });

  // Test : Retourner un livre doit incrémenter availableCopies
  it('should increment availableCopies when a book is return', () => {
    const result = service.returnBook(book.id);
    expect(result).toBe(true);
  });

  // Test : Ne pas retourner un livre qui n'existe pas
  it('should not return a book if it does exists', () => {
    const result = service.returnBook(5);
    expect(result).toBe(false);
  });

  // Test : Ne pas retourner un livre dont toutes les copies ont déjà été rendues
  it('should not return a book when all copies is already return', () => {
    const newBook: Book = {
      id: 3,
      title: 'title',
      author: 'author',
      availableCopies: 0,
      totalCopies: 0,
    };

    const result = service.returnBook(newBook.id);
    expect(result).toBe(false);
  });

  // Ajoute des tests de ton choix pour les autres méthodes
  it('should delete a book correctly', () => {
    const result = service.deleteBook(book.id);
    expect(result).toBe(true);
  });

  it('should update a book correctly', () => {
    const result = service.updateBook({ ...book, title: 'un autre titre' });
    expect(result).toBe(true);
  });
});
