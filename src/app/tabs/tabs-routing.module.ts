import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '', component: TabsPage, children: [
      { path: 'books', loadChildren: './books/books.module#BooksPageModule' },
      { path: 'book/:id', loadChildren: './books/book/book.module#BookPageModule' },
      { path: 'artworks', loadChildren: './artworks/artworks.module#ArtworksPageModule' },
      { path: 'artists', loadChildren: './artists/artists.module#ArtistsPageModule' },
      { path: 'artist/:id', loadChildren: './artists/artist/artist.module#ArtistPageModule' },
    ]
  },
  { path: 'artist', loadChildren: './artists/artist/artist.module#ArtistPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
