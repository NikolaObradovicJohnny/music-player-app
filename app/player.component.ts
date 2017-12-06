import { Component, Input } from '@angular/core';

@Component({
  selector: 'music-player',
  templateUrl: './player.component.html',
  inputs: ['currentAlbum']
})
export class PlayerComponent {
  title = 'app';
  currentAlbum;
  /*
  if(this.currentAlbum) {
    this.currentSong = currentAlbum.songs[0];
    this.songPath = "assets/albums/"+this.currentAlbum.file+'/'+ this.currentSong.file;
  } else {
    this.currentSong = {
        name: '',
        file: '',
    };
    this.songPath = '';
  }
  */
  currentSong = {
        name: '',
        file: '',
    };

  album = {
  	id: 1,
  	band_name: 'WhiteSnake',
  	title: 'WhiteSnake',
  	year: 1987,
    image: 'cover.jpg',
    file: '1987 - Whitesnake',
  	songs: [
  	  {
        name: 'Crying in the Rain',
        file: '(01) [Whitesnake] Crying in the Rain.mp3',
      },
      {
        name: 'Bad Boys',
        file: '(02) [Whitesnake] Bad Boys.mp3',
      },
      {
        name: 'Still of the Night',
        file: '(03) [Whitesnake] Still of the Night.mp3',
      },
      {
        name: 'Here I Go Again',
        file: '(04) [Whitesnake] Here I Go Again.mp3',
      },
      {
        name: 'Give me all your Love',
        file: '(05) [Whitesnake] Give me all your Love.mp3',
      },
      {
        name: 'Is This Love',
        file: '(06) [Whitesnake] Is This Love.mp3',
      },
      {
        name: 'Children of the Night',
        file: '(07) [Whitesnake] Children of the Night.mp3',
      },
      {
        name: 'Straight for the Heart',
        file: '(08) [Whitesnake] Straight for the Heart.mp3',
      },
      {
        name: "Don't Turn Away",
        file: "(09) [Whitesnake] Don't Turn Away.mp3",
      }
  	]
  }


  // songPath = "assets/albums/"+this.album.file+'/'+ this.album.songs[0].file;
  songPath = "";
  
  clicked(song) {
    var player = document.getElementById('audioPlayer');
    if(this.currentAlbum !== undefined) {
      this.album = this.currentAlbum;
    }

    this.currentSong = song;
    this.songPath = "assets/albums/"+this.album.file+'/'+ this.currentSong.file;

    /*player.play();*/
  }

}
