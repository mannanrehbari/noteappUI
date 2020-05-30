import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Modblock } from 'src/app/classes/models/modblock';

@Injectable({
  providedIn: 'root'
})
export class AddnoteService {

  public newNoteSubject = new Subject<any>();

  constructor() { }

  addNote(modblock: Modblock){
    var addedNoteObj = modblock;
    this.newNoteSubject.next(addedNoteObj);
  }


}
