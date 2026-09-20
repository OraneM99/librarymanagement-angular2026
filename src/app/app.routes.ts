import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./books/book-list/book-list').then((m) => m.BookList),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./books/add-book/add-book').then((m) => m.AddBook),
  },
];
