import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books: Book[];
  filteredBooks: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService.getBooks()
      .subscribe((books: Book[]) => {
        this.books = books;
        this.filteredBooks = [...this.books];
      });
  }

  onSearchChange(e) {
    const value = e.detail.value.toLowerCase();
    this.filteredBooks = this.books.filter(b => {
      return b.title.toLocaleLowerCase().indexOf(value) !== -1;
    });
  }
}
