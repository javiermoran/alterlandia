import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './artists.service';
import { Artist } from './artist.model';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  artists: Artist[];
  filteredArtists: Artist[];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artistsService.getArtists()
      .subscribe(artists => {
        this.artists = artists;
        this.filteredArtists = [...this.artists];
      });
  }

  onSearchChange(event): void {
    const value = event.detail.value.toLowerCase();
    this.filteredArtists = this.artists.filter(b => {
      return b.name.toLocaleLowerCase().indexOf(value) !== -1;
    });
  }
}
