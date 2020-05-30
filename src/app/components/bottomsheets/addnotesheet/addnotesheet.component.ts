import { Component, OnInit, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Modblock } from 'src/app/classes/models/modblock';
import { ModblockService } from 'src/app/services/restapi/modblock/modblock.service';
import { Note } from 'src/app/classes/models/note';
import { AddnoteService } from 'src/app/services/addnote/addnote.service';

@Component({
  selector: 'app-addnotesheet',
  templateUrl: './addnotesheet.component.html',
  styleUrls: ['./addnotesheet.component.css']
})
export class AddnotesheetComponent implements OnInit {

  modblock: Modblock;
  note: Note;

  //newNote Id: 
  randId : number;

  //for edit
  editNote: Note;
  editMode: boolean = false;

  //original state restore
  modblockRestore: Modblock;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) data: any,
    private bottomSheetRef: MatBottomSheetRef<AddnotesheetComponent>,
    private modblockService: ModblockService,
    private addNoteService: AddnoteService
  ) {
    this.modblock = data.modblock;
    this.modblockRestore = {...this.modblock};
    if (data.note) {
      this.editMode = true;
      this.editNote = data.note;
    }

  }

  ngOnInit(): void {
    if (this.editMode) {
      
    } else {
      this.note = new Note();
    }

  }

  saveNote() {
    this.randId = Math.floor(Math.random() * 10000 + 1);
    this.note.noteId = this.randId.toString();
    this.note.mbId = this.modblock.mbId;
    this.note.modId = this.modblock.modId;
    this.note.langId = this.modblock.langId;


    this.modblock.notes.push(this.note);
    this.addNoteService.addNote(this.modblock);



    this.modblockService.addNote(this.note).subscribe(
      (data) => {
        console.log(data);
      }
    );
    this.bottomSheetRef.dismiss();
  }
  saveEditedNote() {
    //this.modblock.notes.push(this.editNote);
    this.addNoteService.addNote(this.modblock);

    this.modblockService.addNote(this.editNote).subscribe(
      (data) => {
        console.log(data);
      }
    );
    this.bottomSheetRef.dismiss();
  }

  closeSheet() {
    this.addNoteService.addNote(this.modblockRestore);
    this.bottomSheetRef.dismiss();

  }


}
