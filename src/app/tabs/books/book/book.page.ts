import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  book: Book;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getBookDetails(id);
    });
  }

  getBookDetails(id: string): void {
    this.booksService.getBook(id)
      .subscribe(book => {
        this.book = book;
      });
  }

}
