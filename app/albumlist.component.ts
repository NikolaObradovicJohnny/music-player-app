import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'album-list',
  templateUrl: './albumlist.component.html',
  inputs: ['albumList'],
  outputs: ['childChanged']
})
export class AlbumListComponent {
  albumList;
  filters = [];
  searchInput = "";
  childChanged = new EventEmitter();
  title = 'app';

/*  albums = [{
  	id: 1,
  	band_name: 'WhiteSnake',
  	title: 'WhiteSnake',
  	year: 1987,
    image: 'cover.jpg',
    file: '1987 - Whitesnake',
    genre: 'Rock',
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
        file: '(03) [Whitesnake] Bad Boys.mp3',
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
  },
  {
    id: 2,
    band_name: 'The Winery Dogs',
    title: 'The Winery Dogs',
    year: 2013,
    image: 'Folder.jpg',
    file: 'WD',
    genre: 'Rock',
    songs: [
      {
        name: 'Elevate',
        file: '01 - Elevate.mp3',
      },
      {
        name: 'Desire',
        file: '02 - Desire.mp3',
      },
      {
        name: 'We Are One',
        file: '03 - We Are One.mp3',
      },
      {
        name: "I'm no Angel",
        file: "04 - I'm No Angel.mp3",
      },
      {
        name: 'The Other Side',
        file: '05 - The Other Side.mp3',
      },
      {
        name: 'You Saved Me',
        file: '06 - You Saved Me.mp3',
      },
      {
        name: 'Not Hopeless',
        file: '07 - Not Hopeless.mp3',
      },
      {
        name: 'One More Time',
        file: '08 - One More Time.mp3',
      },
      {
        name: 'Damaged',
        file: '09 - Damaged.mp3',
      },
      {
        name: 'Six Feet Deeper',
        file: '10 - Six Feet Deeper.mp3',
      },
      {
        name: 'Criminal',
        file: '11 - Criminal.mp3',
      },
      {
        name: 'The Dying',
        file: '12 - The Dying.mp3',
      },
      {
        name: 'Regret',
        file: '13 - Regret.mp3',
      }
    ]
  },
  {
    id: 3,
    band_name: 'The Winery Dogs',
    title: 'Hot Streak',
    year: 2013,
    image: 'Folder.jpg',
    file: 'THE WINERY DOGS - Hot Streak (2015)',
    genre: 'Rock',
    songs: [
      {
        name: 'Oblivion',
        file: '01. Oblivion.mp3',
      },
      {
        name: 'Captain Love',
        file: '02. Captain Love.mp3',
      },
      {
        name: 'Hot Streak',
        file: '03. Hot Streak.mp3',
      },
      {
        name: "How Long",
        file: "04. How Long.mp3",
      },
      {
        name: 'Empire',
        file: '05. Empire.mp3',
      },
      {
        name: 'Fire',
        file: '06. Fire.mp3',
      },
      {
        name: 'Ghost Town',
        file: '07. Ghost Town.mp3',
      },
      {
        name: 'The Bridge',
        file: '08. The Bridge.mp3',
      },
      {
        name: 'War Machine',
        file: '09. War Machine.mp3',
      },
      {
        name: 'Spiral',
        file: '10. Spiral.mp3',
      },
      {
        name: 'Devil You Know',
        file: '11. Devil You Know.mp3',
      },
      {
        name: 'Think It Over',
        file: '12. Think It Over.mp3',
      },
      {
        name: 'The Lamb',
        file: '13. The Lamb.mp3',
      }
    ]
  },
  {
    id: 4,
    band_name: 'Deep Purple',
    title: 'In Rock',
    year: 1970,
    image: 'Deep_Purple_-_In_Rock-front.jpg',
    file: '1970 - Deep Purple - Deep Purple In Rock',
    genre: 'Rock',
    songs: [
      {
        name: 'Speed King',
        file: 'Deep Purple - Deep Purple In Rock - 01- Speed King.mp3',
      },
      {
        name: 'Bloodsucker',
        file: 'Deep Purple - Deep Purple In Rock - 02 - Bloodsucker.mp3',
      },
      {
        name: 'Child In Time',
        file: 'Deep Purple - Deep Purple In Rock - 03 - Child In Time.mp3',
      },
      {
        name: 'Flight Of The Rat',
        file: 'Deep Purple - Deep Purple In Rock - 04 - Flight Of The Rat.mp3',
      },
      {
        name: 'Into The Fire',
        file: 'Deep Purple - Deep Purple In Rock - 05 - Into The Fire.mp3',
      },
      {
        name: 'Living Wreck',
        file: 'Deep Purple - Deep Purple In Rock - 06 - Living Wreck.mp3',
      },
      {
        name: "Hard Lovin' Man",
        file: "Deep Purple - Deep Purple In Rock - 07 - Hard Lovin' Man.mp3",
      }
    ]
  },{
    id: 5,
    band_name: 'Deep Purple',
    title: 'Fireball',
    year: 1971,
    image: 'Deep_Purple_-_Fireball-front.jpg',
    file: '1971 - Deep Purple - Fireball',
    genre: 'Rock',
    songs: [
      {
        name: 'Fireball',
        file: 'Deep Purple - Fireball - 01 - Fireball.mp3',
      },
      {
        name: 'No No No',
        file: 'Deep Purple - Fireball - 02 - No No No.mp3',
      },
      {
        name: "Demon's Eye",
        file: "Deep Purple - Fireball - 03 - Demon's Eye.mp3",
      },
      {
        name: "Anyone's Daughter",
        file: "Deep Purple - Fireball - 04 - Anyone's Daughter.mp3",
      },
      {
        name: 'The Mule',
        file: 'Deep Purple - Fireball - 05 - The Mule.mp3',
      },
      {
        name: 'Fools',
        file: 'Deep Purple - Fireball - 06 - Fools.mp3',
      },
      {
        name: "No One Came",
        file: "Deep Purple - Fireball - 07 - No One Came.mp3",
      }
    ]
  },
  {
    id: 6,
    band_name: 'Deep Purple',
    title: 'Machine Head',
    year: 1972,
    image: 'Deep_Purple_-_Machine_Head-front.jpg',
    file: '1972 - Deep Purple - Machine Head',
    genre: 'Rock',
    songs: [
      {
        name: 'Highway Star',
        file: '01 - Highway Star.mp3',
      },
      {
        name: "Maybe I'm A Leo",
        file: "02 - Maybe I'm A Leo.mp3",
      },
      {
        name: "Picture of Home",
        file: "03 - Picture of Home.mp3",
      },
      {
        name: "Never Before",
        file: "04 - Never Before.mp3",
      },
      {
        name: 'Smoke On The Water',
        file: '05 - Smoke On The Wa.mp3',
      },
      {
        name: 'Lazy',
        file: '06 - Lazy.mp3',
      },
      {
        name: "Space Truckin",
        file: "07 - Space Truckin.mp3",
      }
    ]
  },
  {
    id: 7,
    band_name: 'Deep Purple',
    title: 'Burn',
    year: 1974,
    image: 'DEEP_PURPLE--Burn_front.jpg',
    file: '1974 - Deep Purple - Burn',
    genre: 'Rock',
    songs: [
      {
        name: 'Burn',
        file: 'Deep Purple - Burn - 01 - Burn.mp3',
      },
      {
        name: "Might Just Take Your Life",
        file: "Deep Purple - Burn - 02 - Might Just Take Your Life.mp3",
      },
      {
        name: "Lay Down Stay Down",
        file: "Deep Purple - Burn - 03 - Lay Down Stay Down.mp3",
      },
      {
        name: "Sail Away",
        file: "Deep Purple - Burn - 04 - Sail Away.mp3",
      },
      {
        name: 'Whats Goin On Here',
        file: 'Deep Purple - Burn - 05 - You Fool No One.mp3',
      },
      {
        name: 'Whats Goin On Here',
        file: 'Deep Purple - Burn - 06 - Whats Goin On Here.mp3',
      },
      {
        name: 'Mistreated',
        file: 'Deep Purple - Burn - 07 - Mistreated.mp3',
      },
      {
        name: "A 200",
        file: "Deep Purple - Burn - 08 - A 200.mp3",
      }
    ]
  },
  {
    id: 8,
    band_name: 'California Breed',
    title: 'California Breed',
    year: 2014,
    image: 'California Breed.jpg',
    file: 'California Breed - California Breed(2014)(mp3)',
    genre: 'Rock',
    songs: [
      {
        name: 'The Way',
        file: '01. The Way.mp3',
      },
      {
        name: 'Sweet Tea',
        file: '02. Sweet Tea.mp3',
      },
      {
        name: 'Chemical Rain',
        file: '03. Chemical Rain.mp3',
      },
      {
        name: "Midnight Oil",
        file: "04. Midnight Oil.mp3",
      },
      {
        name: 'All Falls Down',
        file: '05. All Falls Down.mp3',
      },
      {
        name: 'The Grey',
        file: '06. The Grey.mp3',
      },
      {
        name: 'Days They Come',
        file: '07. Days They Come.mp3',
      },
      {
        name: 'Spit You Out',
        file: '08. Spit You Out.mp3',
      },
      {
        name: 'Strong',
        file: '09. Strong.mp3',
      },
      {
        name: 'Invisible',
        file: '10. Invisible.mp3',
      },
      {
        name: 'Scars',
        file: '11. Scars.mp3',
      },
      {
        name: 'Breathe',
        file: '12. Breathe.mp3',
      },
      {
        name: 'Solo',
        file: '13. Solo.mp3',
      }
    ]
  },
  {
    id: 9,
    band_name: 'Gus G',
    title: 'I Am The Fire',
    year: 2014,
    image: 'Folder.jpg',
    file: 'Gus G - I Am The Fire (2014) [320kbps]',
    genre: 'Metal',
    songs: [
      {
        name: 'My Will Be Done',
        file: '01 - My Will Be Done (Feat. Mats Levén).mp3',
      },
      {
        name: 'Blame It On Me',
        file: '02 - Blame It On Me (Feat. Mats Levén).mp3',
      },
      {
        name: 'I Am The Fire',
        file: '03 - I Am The Fire (Feat. Devour The Day).mp3',
      },
      {
        name: "Vengeance",
        file: "04 - Vengeance (Feat. David Ellefson).mp3",
      },
      {
        name: 'Long Way Down',
        file: '05 - Long Way Down (Feat. Alexia Rodriguez).mp3',
      },
      {
        name: "Just Can't Let Go",
        file: "06 - Just Can't Let Go (Feat. Jacob Bunton).mp3",
      },
      {
        name: 'Terrified',
        file: '07 - Terrified (Feat. Billy Sheehan).mp3',
      },
      {
        name: 'Eyes Wide Open',
        file: '08 - Eyes Wide Open (Feat. Mats Levén).mp3',
      },
      {
        name: 'Redemption',
        file: '09 - Redemption (Feat. Michael Starr).mp3',
      },
      {
        name: 'Summer Days',
        file: '10 - Summer Days (Feat. Jeff Scott Soto).mp3',
      },
      {
        name: 'Dreamkeeper',
        file: '11 - Dreamkeeper (Feat. Tom S. Englund).mp3',
      },
      {
        name: 'End Of The Line',
        file: '12 - End Of The Line (Feat. Mats Levén).mp3',
      }
    ]
  },
  {
    id: 10,
    band_name: 'Rival Sons',
    title: 'Pressure & Time',
    year: 2011,
    image: 'Folder.jpg',
    file: 'Rival Sons - Pressure & Time 2011',
    genre: 'Rock',
    songs: [
      {
        name: 'All Over the Road',
        file: '01-All Over the Road.flac',
      },
      {
        name: 'Young Love',
        file: '02-Young Love.flac',
      },
      {
        name: 'Pressure and Time',
        file: '03-Pressure and Time.flac',
      },
      {
        name: "Only One",
        file: "04-Only One.flac",
      },
      {
        name: 'Get Mine',
        file: '05-Get Mine.flac',
      },
      {
        name: "Burn Down Los Angeles",
        file: "06-Burn Down Los Angeles.flac",
      },
      {
        name: 'Save Me',
        file: '07-Save Me.flac',
      },
      {
        name: 'Gypsy Heart',
        file: '08-Gypsy Heart.flac',
      },
      {
        name: 'White Noise',
        file: '09-White Noise.flac',
      },
      {
        name: 'Face of Light',
        file: '10 -Face of Light.flac',
      }
    ]
  },
  {
    id: 11,
    band_name: 'The Dead Daisies',
    title: 'Make Some Noise',
    year: 2011,
    image: 'Folder.jpg',
    file: 'The Dead Daisies - Make Some Noise (2016)',
    genre: 'Rock',
    songs: [
      {
        name: 'Long Way To Go',
        file: '01. Long Way To Go.mp3',
      },
      {
        name: 'We All Fall Down',
        file: '02. We All Fall Down.mp3',
      },
      {
        name: 'Song And A Prayer',
        file: '03. Song And A Prayer.mp3',
      },
      {
        name: "Mainline",
        file: "04. Mainline.mp3",
      },
      {
        name: 'Make Some Noise',
        file: '05. Make Some Noise.mp3',
      },
      {
        name: "Fortunate Son",
        file: "06. Fortunate Son.mp3",
      },
      {
        name: 'Last Time I Saw The Sun',
        file: '07. Last Time I Saw The Sun.mp3',
      },
      {
        name: 'Mine All Mine',
        file: '08. Mine All Mine.mp3',
      },
      {
        name: 'How Does It Feel',
        file: '09. How Does It Feel.mp3',
      },
      {
        name: 'Freedom',
        file: '10. Freedom.mp3',
      },
      {
        name: 'All The Same',
        file: '11. All The Same.mp3',
      },
      {
        name: 'Join Together',
        file: '12. Join Together.mp3',
      }
    ]
  },
  {
    id: 12,
    band_name: 'The Doors',
    title: 'The Doors',
    year: 1967,
    image: 'Folder.jpg',
    file: '1967 - The Doors',
    genre: 'Rock',
    songs: [
      {
        name: 'Alabama Song',
        file: 'The Doors - Alabama Song.MP3',
      },
      {
        name: 'Back Door Man',
        file: 'The Doors - Back Door Man.MP3',
      },
      {
        name: 'Break On Through',
        file: 'The Doors - Break On Through.MP3',
      },
      {
        name: "End Of The Night",
        file: "The Doors - End Of The Night.MP3",
      },
      {
        name: 'I Looked At You',
        file: 'The Doors - I Looked At You.MP3',
      },
      {
        name: "Light My Fire",
        file: "The Doors - Light My Fire.MP3",
      },
      {
        name: 'Soul Kitchen',
        file: 'The Doors - Soul Kitchen.MP3',
      },
      {
        name: 'Take It As It Comes',
        file: 'The Doors - Take It As It Comes.MP3',
      },
      {
        name: 'The Crystal Ship',
        file: 'The Doors - The Crystal Ship.MP3',
      },
      {
        name: 'The End',
        file: 'The Doors - The End.MP3',
      },
      {
        name: 'Twentienth Century Fox',
        file: 'The Doors - Twentienth Century Fox.MP3',
      }
    ]
  },
  {
    id: 13,
    band_name: 'The Doors',
    title: 'L.A. Woman',
    year: 1971,
    image: 'cover.png',
    file: '1971 - L.A.Woman',
    genre: 'Rock',
    songs: [
      {
        name: 'Been Down So Long',
        file: 'The Doors - Been Down So Long.MP3',
      },
      {
        name: 'Cars Hiss By My Window',
        file: 'The Doors - Cars Hiss By My Window.MP3',
      },
      {
        name: 'Crawling King Snake',
        file: 'The Doors - Crawling King Snake.MP3',
      },
      {
        name: "Hyacinth House",
        file: "The Doors - Hyacinth House.MP3",
      },
      {
        name: "L'america",
        file: "The Doors - L'america.MP3",
      },
      {
        name: "L.A. Woman",
        file: "The Doors - La Woman.MP3",
      },
      {
        name: 'Love Her Madly',
        file: 'The Doors - Love Her Madly.MP3',
      },
      {
        name: 'Riders On The Storm',
        file: 'The Doors - Riders On The Storm.MP3',
      },
      {
        name: 'The Changeling',
        file: 'The Doors - The Changeling.MP3',
      },
      {
        name: 'The Wasp (Texas Radio And The Big Beat)',
        file: 'The Doors - The Wasp (Texas Radio And The Big Beat).MP3',
      }
    ]
  },
  {
    id: 14,
    band_name: 'Velvet Revolver',
    title: 'Contraband',
    year: 2004,
    image: 'Folder.jpg',
    file: '(2004) Contraband',
    genre: 'Rock',
    songs: [
      {
        name: 'Big Maching',
        file: 'Velvet Revolver - Big Maching.mp3',
      },
      {
        name: 'Bodies (Live)',
        file: 'Velvet Revolver - Bodies (Live).mp3',
      },
      {
        name: 'Dirty Little Thing',
        file: 'Velvet Revolver - Dirty Little Thing.mp3',
      },
      {
        name: "Do It For The Kids",
        file: "Velvet Revolver - Do It For The Kids.mp3",
      },
      {
        name: "Fall To Pieces",
        file: "Velvet Revolver - Fall To Pieces.mp3",
      },
      {
        name: "Headspace",
        file: "Velvet Revolver - Headspace.mp3",
      },
      {
        name: 'Illegal I Song',
        file: 'Velvet Revolver - Illegal I Song.mp3',
      },
      {
        name: 'Loving The Alien',
        file: 'Velvet Revolver - Loving The Alien.mp3',
      },
      {
        name: 'Set Me Free',
        file: 'Velvet Revolver - Set Me Free.mp3',
      },
      {
        name: 'Slither',
        file: 'Velvet Revolver - Slither.mp3',
      },
      {
        name: "Spectacle",
        file: "Velvet Revolver - Spectacle.mp3",
      },
      {
        name: "Sucker Train Blues",
        file: "Velvet Revolver - Sucker Train Blues.mp3",
      },
      {
        name: "Superhuman",
        file: "Velvet Revolver - Superhuman.mp3",
      },
      {
        name: "You Got No Right",
        file: "Velvet Revolver - You Got No Right.mp3",
      }
    ]
  },
  {
    id: 15,
    band_name: 'Led Zeppelin',
    title: 'Led Zeppelin I',
    year: 1969,
    image: 'Led Zeppelin.jpg',
    file: '01. Led Zeppelin (1969)',
    genre: 'Rock',
    songs: [
      {
        name: 'Good Times Bad Times',
        file: '01. Good Times Bad Times.mp3',
      },
      {
        name: "Babe I'm Gonna Leave You",
        file: "02. Babe I'm Gonna Leave You.mp3",
      },
      {
        name: "You Shook Me",
        file: "03. You Shook Me.mp3",
      },
      {
        name: "Dazed And Confused",
        file: "04. Dazed And Confused.mp3",
      },
      {
        name: "Your Time Is Gonna Come",
        file: "05. Your Time Is Gonna Come.mp3",
      },
      {
        name: "Black Mountain Side",
        file: "06. Black Mountain Side.mp3",
      },
      {
        name: "Communication Breakdown",
        file: "07. Communication Breakdown.mp3",
      },
      {
        name: "I Can't Quit You Baby",
        file: "08. I Can't Quit You Baby.mp3",
      },
      {
        name: 'How Many More Times',
        file: '09. How Many More Times.mp3',
      }
    ]
  },
  {
    id: 16,
    band_name: 'Led Zeppelin',
    title: 'Led Zeppelin II',
    year: 1969,
    image: 'Led Zeppelin II.jpg',
    file: '02. Led Zeppelin II (1969)',
    genre: 'Rock',
    songs: [
      {
        name: 'Whole Lotta Love',
        file: '01. Whole Lotta Love.mp3',
      },
      {
        name: "What Is And What Should Never Be",
        file: "02. What Is And What Should Never Be.mp3",
      },
      {
        name: "The Lemon Song",
        file: "03. The Lemon Song.mp3",
      },
      {
        name: "Thank You",
        file: "04. Thank You.mp3",
      },
      {
        name: "Heartbreaker",
        file: "05. Heartbreaker.mp3",
      },
      {
        name: "Living Loving Maid (She's Just A Woman)",
        file: "06. Living Loving Maid (She's Just A Woman).mp3",
      },
      {
        name: "Ramble On",
        file: "07. Ramble On.mp3",
      },
      {
        name: "Moby Dick",
        file: "08. Moby Dick.mp3",
      },
      {
        name: 'Bring It On Home',
        file: '09. Bring It On Home.mp3',
      }
    ]
  },
  {
    id: 17,
    band_name: 'Led Zeppelin',
    title: 'Led Zeppelin III',
    year: 1970,
    image: 'Led Zeppelin III.jpg',
    file: '03. Led Zeppelin III (1970)',
    genre: 'Rock',
    songs: [
      {
        name: 'Immigrant Song',
        file: '01. Immigrant Song.mp3',
      },
      {
        name: "Friends",
        file: "02. Friends.mp3",
      },
      {
        name: "Celebration Day",
        file: "03. Celebration Day.mp3",
      },
      {
        name: "Since I've Been Loving You",
        file: "04. Since I've Been Loving You.mp3",
      },
      {
        name: "Out On The Tiles",
        file: "05. Out On The Tiles.mp3",
      },
      {
        name: "Gallows Pole",
        file: "06. Gallows Pole.mp3",
      },
      {
        name: "Tangerine",
        file: "07. Tangerine.mp3",
      },
      {
        name: "That's The Way",
        file: "08. That's The Way.mp3",
      },
      {
        name: 'Bron-Y-Aur Stomp',
        file: '09. Bron-Y-Aur Stomp.mp3',
      },
      {
        name: "Hats Off To (Roy) Harper",
        file: "10. Hats Off To (Roy) Harper.mp3",
      }
    ]
  },
  {
    id: 18,
    band_name: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    year: 1971,
    image: 'Led Zeppelin IV.jpg',
    file: '04. Led Zeppelin IV (1971)',
    genre: 'Rock',
    songs: [
      {
        name: 'Black Dog',
        file: '01. Black Dog.mp3',
      },
      {
        name: "Rock And Roll",
        file: "02. Rock And Roll.mp3",
      },
      {
        name: "The Battle Of Evermore",
        file: "03. The Battle Of Evermore.mp3",
      },
      {
        name: "Stairway To Heaven",
        file: "04. Stairway To Heaven.mp3",
      },
      {
        name: "Misty Mountain Hop",
        file: "05. Misty Mountain Hop.mp3",
      },
      {
        name: "Four Sticks",
        file: "06. Four Sticks.mp3",
      },
      {
        name: "Going To California",
        file: "07. Going To California.mp3",
      },
      {
        name: "When The Levee Breaks",
        file: "08. When The Levee Breaks.mp3",
      }
    ]
  },
  {
    id: 19,
    band_name: 'Led Zeppelin',
    title: 'Houses of The Holy',
    year: 1973,
    image: 'Houses of The Holy.jpg',
    file: '05. Houses of The Holy (1973)',
    genre: 'Rock',
    songs: [
      {
        name: 'The Song Remains The Same',
        file: '01. The Song Remains The Same.mp3',
      },
      {
        name: "The Rain Song",
        file: "02. The Rain Song.mp3",
      },
      {
        name: "Over The Hills And Far Away",
        file: "03. Over The Hills And Far Away.mp3",
      },
      {
        name: "The Crunge",
        file: "04. The Crunge.mp3",
      },
      {
        name: "Dancing Days",
        file: "05. Dancing Days.mp3",
      },
      {
        name: "D'yer Mak'er",
        file: "06. D'yer Mak'er.mp3",
      },
      {
        name: "No Quarter",
        file: "07. No Quarter.mp3",
      },
      {
        name: "The Ocean",
        file: "08. The Ocean.mp3",
      }
    ]
  },
  {
    id: 20,
    band_name: 'Black Label Society',
    title: '1919 Eternal',
    year: 2002,
    image: '!front.jpg',
    file: 'Black Label Society - 2002 1919 Eternal',
    genre: 'Metal',
    songs: [
      {
        name: 'Bleed For Me',
        file: '01 - Bleed For Me.mp3',
      },
      {
        name: "Lords Of Destruction",
        file: "02 - Lords Of Destruction.mp3",
      },
      {
        name: "Demise Of Sanity",
        file: "03 - Demise Of Sanity.mp3",
      },
      {
        name: "Life, Birth, Blood, Doom",
        file: "04 - Life, Birth, Blood, Doom.mp3",
      },
      {
        name: "Bridge To Cross",
        file: "05 - Bridge To Cross.mp3",
      },
      {
        name: "Battering Ram",
        file: "06 - Battering Ram.mp3",
      },
      {
        name: "Speedball",
        file: "07 - Speedball.mp3",
      },
      {
        name: "Graveyard Disciples",
        file: "08 - Graveyard Disciples.mp3",
      },
      {
        name: "Genocide Junkies",
        file: "09 - Genocide Junkies.mp3",
      },
      {
        name: "Lost Heaven",
        file: "10 - Lost Heaven.mp3",
      },
      {
        name: "Refuse To Bow Down",
        file: "11 - Refuse To Bow Down.mp3",
      },
      {
        name: "Mass Murder Machine",
        file: "12 - Mass Murder Machine.mp3",
      },
      {
        name: "Berserkers",
        file: "13 - Berserkers.mp3",
      },
      {
        name: "America The Beautiful",
        file: "14 - America The Beautiful.mp3",
      },
      {
        name: "Llibdeeps (Bonus)",
        file: "15 - Llibdeeps (Bonus).mp3",
      }
    ]
  },
  {
    id: 21,
    band_name: 'Black Label Society',
    title: 'The Blessed Hellride',
    year: 2003,
    image: '!front.jpg',
    file: 'Black Label Society - 2003 The Blessed Hellride',
    genre: 'Metal',
    songs: [
      {
        name: 'Stoned And Drunk',
        file: '01 - Stoned And Drunk.mp3',
      },
      {
        name: "Doomsday Jesus",
        file: "02 - Doomsday Jesus.mp3",
      },
      {
        name: "Stillborn",
        file: "03 - Stillborn.mp3",
      },
      {
        name: "Suffering Overdue",
        file: "04 - Suffering Overdue.mp3",
      },
      {
        name: "Bridge To Cross",
        file: "05 - The Blessed Hellride.mp3",
      },
      {
        name: "Funeral Bell",
        file: "06 - Funeral Bell.mp3",
      },
      {
        name: "Final Solution",
        file: "07 - Final Solution.mp3",
      },
      {
        name: "Destruction Overdrive",
        file: "08 - Destruction Overdrive.mp3",
      },
      {
        name: "Blackened Waters",
        file: "09 - Blackened Waters.mp3",
      },
      {
        name: "We Live No More",
        file: "10 - We Live No More.mp3",
      },
      {
        name: "Dead Meadow",
        file: "11 - Dead Meadow.mp3",
      },
      {
        name: "F.U.N. (Bonus)",
        file: "12 - F.U.N. (Bonus).mp3",
      }
    ]
  },
  {
    id: 22,
    band_name: 'Black Label Society',
    title: 'Mafia',
    year: 2005,
    image: '!front.jpg',
    file: 'Black Label Society - 2005 Mafia',
    genre: 'Metal',
    songs: [
      {
        name: 'Fire It Up',
        file: '01 - Fire It Up.mp3',
      },
      {
        name: "What's In You",
        file: "02 - What's In You.mp3",
      },
      {
        name: "Suicide Messiah",
        file: "03 - Suicide Messiah.mp3",
      },
      {
        name: "Forever Down",
        file: "04 - Forever Down.mp3",
      },
      {
        name: "In This River",
        file: "05 - In This River.mp3",
      },
      {
        name: "You Must Be Blind",
        file: "06 - You Must Be Blind.mp3",
      },
      {
        name: "Death March",
        file: "07 - Death March.mp3",
      },
      {
        name: "Dr. Octavia",
        file: "08 - Dr. Octavia.mp3",
      },
      {
        name: "Say What You Will",
        file: "09 - Say What You Will.mp3",
      },
      {
        name: "Too Tough To Die",
        file: "10 - Too Tough To Die.mp3",
      },
      {
        name: "Electric Hellfire",
        file: "11 - Electric Hellfire.mp3",
      },
      {
        name: "Spread Your Wings",
        file: "12 - Spread Your Wings.mp3",
      },
      {
        name: "Been A Long Time",
        file: "13 - Been A Long Time.mp3",
      },
      {
        name: "Dirt On The Grave",
        file: "14 - Dirt On The Grave.mp3",
      },
      {
        name: "I Never Dreamed (Bonus)",
        file: "15 - I Never Dreamed (Bonus).mp3",
      }
    ]
  },
  {
    id: 23,
    band_name: 'Black Label Society',
    title: 'Shot to Hell',
    year: 2006,
    image: '!front.jpg',
    file: 'Black Label Society - 2006 Shot to Hell',
    genre: 'Metal',
    songs: [
      {
        name: 'Concrete Jungle',
        file: '01 - Concrete Jungle.mp3',
      },
      {
        name: "Black Mass Reverends",
        file: "02 - Black Mass Reverends.mp3",
      },
      {
        name: "Blacked Out World",
        file: "03 - Blacked Out World.mp3",
      },
      {
        name: "The Last Goodbye",
        file: "04 - The Last Goodbye.mp3",
      },
      {
        name: "Give Yourself To Me",
        file: "05 - Give Yourself To Me.mp3",
      },
      {
        name: "Nothing's The Same",
        file: "06 - Nothing's The Same.mp3",
      },
      {
        name: "Hell Is High",
        file: "07 - Hell Is High.mp3",
      },
      {
        name: "New Religion",
        file: "08 - New Religion.mp3",
      },
      {
        name: "Sick Of It All",
        file: "09 - Sick Of It All.mp3",
      },
      {
        name: "Faith Is Blind",
        file: "10 - Faith Is Blind.mp3",
      },
      {
        name: "Blood Is Thicked Than Water",
        file: "11 - Blood Is Thicked Than Water.mp3",
      },
      {
        name: "Devil's Dime",
        file: "12 - Devil's Dime.mp3",
      },
      {
        name: "Lead Me To Your Door",
        file: "13 - Lead Me To Your Door.mp3",
      }
    ]
  },
  {
    id: 24,
    band_name: 'Iron Maiden',
    title: 'Killers',
    year: 1981,
    image: 'Folder.jpg',
    file: '[1981] Killers [2006 Remastered]',
    genre: 'Metal',
    songs: [
      {
        name: 'The Ides Of March',
        file: '01 - The Ides Of March.mp3',
      },
      {
        name: "Wrathchild",
        file: "02 - Wrathchild.mp3",
      },
      {
        name: "Murders In The Rue Morgue",
        file: "03 - Murders In The Rue Morgue.mp3",
      },
      {
        name: "Another Life",
        file: "04 - Another Life.mp3",
      },
      {
        name: "Genghis Khan",
        file: "05 - Genghis Khan.mp3",
      },
      {
        name: "Innocent Exile",
        file: "06 - Innocent Exile.mp3",
      },
      {
        name: "Killers",
        file: "07 - Killers.mp3",
      },
      {
        name: "Prodigal Son",
        file: "08 - Prodigal Son.mp3",
      },
      {
        name: "Purgatory",
        file: "09 - Purgatory.mp3",
      },
      {
        name: "Twilight Zone",
        file: "10 - Twilight Zone.mp3",
      },
      {
        name: "Drifter",
        file: "11 - Drifter.mp3",
      }
    ]
  },
  {
    id: 25,
    band_name: 'Iron Maiden',
    title: 'The Number Of The Beast',
    year: 1982,
    image: 'Folder.jpg',
    file: '[1982] The Number Of The Beast',
    genre: 'Metal',
    songs: [
      {
        name: 'Invaders',
        file: '01 - Invaders.mp3',
      },
      {
        name: "Children Of The Damned",
        file: "02 - Children Of The Damned.mp3",
      },
      {
        name: "The Prisoner",
        file: "03 - The Prisoner.mp3",
      },
      {
        name: "22, Acacia Avenue",
        file: "04 - 22, Acacia Avenue.mp3",
      },
      {
        name: "The Number Of The Beast",
        file: "05 - The Number Of The Beast.mp3",
      },
      {
        name: "Run To The Hills",
        file: "06 - Run To The Hills.mp3",
      },
      {
        name: "Gangland",
        file: "07 - Gangland.mp3",
      },
      {
        name: "Hallowed Be Thy Name",
        file: "08 - Hallowed Be Thy Name.mp3",
      }
    ]
  },
  {
    id: 26,
    band_name: 'Iron Maiden',
    title: 'Powerslave',
    year: 1984,
    image: 'Folder.jpg',
    file: '[1984] Powerslave',
    genre: 'Metal',
    songs: [
      {
        name: 'Aces High',
        file: '01 - Aces High.mp3',
      },
      {
        name: "2 Minutes To Midnight",
        file: "02 - 2 Minutes To Midnight.mp3",
      },
      {
        name: "Losfer Words (Big 'Orra)",
        file: "03 - Losfer Words (Big 'Orra).mp3",
      },
      {
        name: "Flash Of The Blade",
        file: "04 - Flash Of The Blade.mp3",
      },
      {
        name: "The Duellists",
        file: "05 - The Duellists.mp3",
      },
      {
        name: "Back In The Village",
        file: "06 - Back In The Village.mp3",
      },
      {
        name: "Powerslave",
        file: "07 - Powerslave.mp3",
      },
      {
        name: "Rime Of The Ancient Mariner",
        file: "08 - Rime Of The Ancient Mariner.mp3",
      }
    ]
  },
  {
    id: 27,
    band_name: 'Iron Maiden',
    title: 'Fear Of The Dark',
    year: 1992,
    image: 'Folder.jpg',
    file: '[1992] Fear Of The Dark',
    genre: 'Metal',
    songs: [
      {
        name: 'Be Quick Or Be Dead',
        file: '01 - Be Quick Or Be Dead.mp3',
      },
      {
        name: "From Here To Eternity",
        file: "02 - From Here To Eternity.mp3",
      },
      {
        name: "Afraid To Shoot Strangers",
        file: "03 - Afraid To Shoot Strangers.mp3",
      },
      {
        name: "Fear Is The Key",
        file: "04 - Fear Is The Key.mp3",
      },
      {
        name: "Childhood's End",
        file: "05 - Childhood's End.mp3",
      },
      {
        name: "Wasting Love",
        file: "06 - Wasting Love.mp3",
      },
      {
        name: "The Fugitive",
        file: "07 - The Fugitive.mp3",
      },
      {
        name: "Chains Of Misery",
        file: "08 - Chains Of Misery.mp3",
      },
      {
        name: "The Apparition",
        file: "09 - The Apparition.mp3",
      },
      {
        name: "Judas Be My Guide",
        file: "10 - Judas Be My Guide.mp3",
      },
      {
        name: "Weekend Warrior",
        file: "11 - Weekend Warrior.mp3",
      },
      {
        name: "Fear Of The Dark",
        file: "12 - Fear Of The Dark.mp3",
      }
    ]
  },
  {
    id: 28,
    band_name: 'Iron Maiden',
    title: 'A Matter Of Life And Death',
    year: 2006,
    image: 'Folder.jpg',
    file: '[2006] A Matter Of Life And Death',
    genre: 'Metal',
    songs: [
      {
        name: 'Different World',
        file: '01 - Different World.mp3',
      },
      {
        name: "These Colours Don't Run",
        file: "02 - These Colours Don't Run.mp3",
      },
      {
        name: "Brighter Than A Thousand Suns",
        file: "03 - Brighter Than A Thousand Suns.mp3",
      },
      {
        name: "The Pilgrim",
        file: "04 - The Pilgrim.mp3",
      },
      {
        name: "The Longest Day",
        file: "05 - The Longest Day.mp3",
      },
      {
        name: "Out Of The Shadows",
        file: "06 - Out Of The Shadows.mp3",
      },
      {
        name: "The Reincarnation Of Benjamin Breeg",
        file: "07 - The Reincarnation Of Benjamin Breeg.mp3",
      },
      {
        name: "For The Greater Good Of God",
        file: "08 - For The Greater Good Of God.mp3",
      },
      {
        name: "Lord Of Light",
        file: "09 - Lord Of Light.mp3",
      },
      {
        name: "The Legacy",
        file: "10 - The Legacy.mp3",
      }
    ]
  }
  ]
*/
  clicked(album) {
    /* this.currentAlbum = album; 
    alert(JSON.stringify(album)); */
    this.childChanged.emit(album);
  }

}
