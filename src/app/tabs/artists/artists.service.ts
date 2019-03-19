import { Injectable } from '@angular/core';
import { Artist } from './artist.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  _artists: Artist[] = [
    {
      id: 'a1',
      name: 'Bernardo Monroy',
      info: 'Nacido en Ciudad de México en 1982. Reportero y periodista, Bernardo es uno de los mejores escritores de cuentos y novelas cortas.',
      pictureUrl: 'https://www.alterlandia.com/assets/img/alter/bmonTrans.png'
    },
    {
      id: 'a2',
      name: 'Ricardo Arturo Guzmán',
      info: 'Yo soy Ricardo y me gusta el caldo. oy el encargado de esta página pero también me gusta trabajar en la creación de libros y cursos de programación, blokchain y criptomonedas.',
      pictureUrl: 'https://www.alterlandia.com/assets/img/alter/richieGuzman.png'
    },
    {
      id: 'a3',
      name: 'Luis Miguel Guzmán',
      info: 'Escritor mexicano nacido el 3 de septiembre de 1983. Médico general de profesión, apasionado del séptimo arte. Escritor de cuentos cortos de terror, ciencia ficción y humor negro.',
      pictureUrl: 'https://www.alterlandia.com/assets/img/alter/mGuzman2.png'
    }
  ];

  constructor() { }

  getArtists(): Observable<Artist[]> {
    return new Observable((observer) => {
      observer.next([...this._artists]);
      observer.complete();
    });
  }

  getArtist(id: string): Observable<Artist> {
    return new Observable((observer) => {
      const artist = this._artists.find(a => a.id === id);
      observer.next({...artist});
      observer.complete();
    });
  }
}
