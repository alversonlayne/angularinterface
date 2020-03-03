import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  faTimes = faTimes;

  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();

  handleDelete(theApt: object) {
    this.deleteEvt.emit(theApt);
  }

}
