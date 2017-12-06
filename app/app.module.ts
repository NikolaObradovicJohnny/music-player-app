import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player.component';
import { AlbumListComponent } from './albumlist.component';
import { FilterBarComponent } from './filterbar.component';

@NgModule({
  declarations: [
    AppComponent, PlayerComponent, AlbumListComponent, FilterBarComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
