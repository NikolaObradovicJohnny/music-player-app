import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-bar',
  templateUrl: './filterbar.component.html',
  outputs: ['childChangedFilters']
})
export class FilterBarComponent {
  title = 'app';
  filters = ['Rock','Blues','Jazz','Metal','Punk','Funk','Alternative'];
  checkedFilters = [];
  childChangedFilters = new EventEmitter();


  clicked(event) {
    event.target.classList.toggle('checked');
    /*
    event.target.classList.add('checked');
    if(event.target.classList.contains('checked')){
      event.target.classList.remove('checked');
    } else {
      event.target.classList.add('checked');
    }
    */

    // prodji for petljom kroz sve
    var checkedFilters = document.getElementsByClassName('checked');
    // napravi praznu listu: checked = []
    var checked = [];
    // ako je klasa == checked => dodaj u listu
    for (var i = 0; i < checkedFilters.length; i++) {
      checked.push(checkedFilters[i].innerHTML.toLowerCase());
    }
    this.checkedFilters = checked;

    this.childChangedFilters.emit(this.checkedFilters);
  }

}
