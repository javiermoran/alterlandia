import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../artist.model';
import { ArtistsService } from '../artists.service';
import { Book } from '../../books/book.model';
import { BooksService } from '../../books/books.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  artist: Artist;
  books: Book[];

  constructor(
    private artistsService: ArtistsService,
    private booksService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getArtist(id);
      this.getArtistBooks(id);
    });
  }

  getArtist(id: string): void {
    this.artistsService.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
      });
  }

  getArtistBooks(id: string) {
    this.booksService.getBooksByArtist(id)
      .subscribe(books => {
        this.books = books;
        console.log(books)
      });
  }
}
