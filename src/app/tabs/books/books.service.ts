import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _books: Book[] = [
    {
      id: 'b1',
      title: 'Una Caja de Cuatro Lados y otros cuentos',
      coverImgUrl: 'https://www.alterlandia.com/assets/img/bookCovers/mini/cajaMini.jpg',
      language: 'MX',
      author: 'Bernardo Monroy',
      synopsis: 'En su nuevo libro, Bernardo Monroy presenta tres relatos con los mismos temas: asesinatos y literatura inglesa de misterio, todo aderezado con la habitual corrupción mexicana y la irreverencia del autor de "Slasher" y "El gato con Converse".',
      authorId: 'a1'
    },
    {
      id: 'b2',
      title: 'The Idol',
      coverImgUrl: 'https://www.alterlandia.com/assets/img/bookCovers/mini/theIdolMini.jpg',
      author: 'Luis Miguel Guzmán',
      synopsis: 'Este thriller trata del testimonio del casi famoso estrella de rock Jhojans Vain, vocalista de la banda Anarky n Vain. La novela se desarrolla en la década de los 90s, justo en la muerte del Hard Rock de los ochenta en la decadencia de bandas como: Guns n Roses, Motley Crue, Cinderella, Pretty Boy Floyd, Poison, Wasp y Bon Jovi.',
      language: 'MX',
      authorId: 'a3'
    },
    {
      id: 'b3',
      title: 'Top Traders Mission I',
      coverImgUrl: 'https://www.alterlandia.com/assets/img/bookCovers/mini/miniTopT.jpg',
      author: 'Ricardo Arturo Guzmán',
      synopsis: 'Hemos hecho este libro para ayudar a las personas a conocer y dominar el mundo del trading de criptomonedas.',
      language: 'MX',
      authorId: 'a2'
    }
  ];

  constructor() { }

  getBooks() {
    return new Observable((observer) => {
      observer.next([...this._books]);
      observer.complete();
    });
  }

  getBook(id: string): Observable<Book> {
    return new Observable((observer) => {
      const book = this._books.find(b => b.id === id);
      observer.next({...book});
      observer.complete();
    });
  }

  getBooksByArtist(id: string): Observable<Book[]> {
    return new Observable((observer) => {
      const books = this._books.filter(b => b.authorId === id);
      observer.next([...books]);
      observer.complete();
    });
  }
}
