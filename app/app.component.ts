import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlbumsService]
})
export class AppComponent implements OnInit {
  title = 'app';
  currentAlbum;
  searchInput;
  genreFilters = [];

  constructor(private albumsService: AlbumsService){  }

  ngOnInit() {
    this.albumsService.getAlbums()
      .subscribe((albumsData) => this.albumList = albumsData);
  }

  search() {
    if(this.searchInput.length >= 3 && this.genreFilters.length == 0) {
      this.albumsService.getAlbumsBySearchInput(this.searchInput)
      .subscribe((albumsData) => this.albumList = albumsData);

    } else if(this.searchInput.length >= 3 && this.genreFilters.length > 0) {
      this.albumsService.getAlbumsBySearchInputAndFilters(this.searchInput, this.genreFilters)
      .subscribe((albumsData) => this.albumList = albumsData);

    } else if(this.searchInput.length < 3 && this.genreFilters.length > 0) {
      this.albumsService.getAlbumsByFilters(this.genreFilters)
      .subscribe((albumsData) => this.albumList = albumsData);

    } else {
      this.albumsService.getAlbums()
      .subscribe((albumsData) => this.albumList = albumsData);

    }
  }

  albumList = [];

}