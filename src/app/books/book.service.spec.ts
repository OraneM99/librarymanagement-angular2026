import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { Book } from './book';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should add a book correctly', () => {
    const book: Book = {
      id: 1,
      title: 'Test Book',
      author: 'Author',
      availableCopies: 1,
      totalCopies: 1,
    };

    const result = service.addBook(book);

    expect(result).toBe(true);
  });

  // Test : L'ajout d'un livre sans titre ne doit pas fonctionner

  // Test : L'ajout d'un livre ayant totalCopies à 0 ou négatif ne doit pas fonctionner

  // Test : Emprunter un livre doit décrémenter availableCopies

  // Test : Ne pas emprunter un livre dont availableCopies est égal à 0

  // Test : Ne pas emprunter un livre qui n'existe pas

  // Test : Retourner un livre doit incrémenter availableCopies

  // Test : Ne pas retourner un livre qui n'existe pas

  // Test : Ne pas retourner un livre dont toutes les copies ont déjà été rendues

  // Ajoute des tests de ton choix pour les autres méthodes
});
