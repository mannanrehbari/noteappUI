import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddnotesheetComponent } from 'src/app/components/bottomsheets/addnotesheet/addnotesheet.component';
import { AddlinksheetComponent } from 'src/app/components/bottomsheets/addlinksheet/addlinksheet.component';
import { Modblock } from 'src/app/classes/models/modblock';
import { ModblockService } from 'src/app/services/restapi/modblock/modblock.service';
import { Note } from 'src/app/classes/models/note';

import jsPDF from 'jspdf';


@Component({
  selector: 'app-moduledata',
  templateUrl: './moduledata.component.html',
  styleUrls: ['./moduledata.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModuledataComponent implements OnInit {

  modblock: Modblock;
  dataLoaded: boolean;

  @ViewChild('htmlDataForPDF') htmlDataForPDF: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    private modblockService: ModblockService,
    private router: Router
  ) { }

  async ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('mbId'));
    // rest call
    this.modblock = await this.modblockService.getById(id.toString()).toPromise();
    this.dataLoaded = true;

  }


  showAddNoteSheet() {
    this.bottomSheet.open(AddnotesheetComponent, {
      data: { modblock: this.modblock },
      panelClass: 'bottom-sheet'
    });
  }
  showAddLinkSheet() {
    this.bottomSheet.open(AddlinksheetComponent, {
      data: { modblock: this.modblock },
      panelClass: 'bottom-sheet'
    });
  }

  async removeNote(note: Note) {
    const data = await this.modblockService.deleteNote(note).toPromise();
    this.ngOnInit();
  }

  editNote(note: Note) {
    this.bottomSheet.open(AddnotesheetComponent, {
      data: { modblock: this.modblock, note: note },
      panelClass: 'bottom-sheet'
    });
  }

  goBack() {
    this.router.navigate(['/language/' + this.modblock.langId]);
  }

  downloadPDF() {
    let DATA = this.htmlDataForPDF.nativeElement;
    var doc = new jsPDF('p', 'pt', 'a4');

    // loop through notes
    // first horizontal, second vertical height
    var leftMargin: number = 80;
    var verticalSpace: number = 40;

    var currTimeDate = new Date();
    doc.text('Topic: ' + this.modblock.mbName, leftMargin, verticalSpace);
    verticalSpace += 20;
    doc.text(currTimeDate.toDateString(), leftMargin, verticalSpace);
    verticalSpace += 20;
    doc.text(currTimeDate.toLocaleTimeString(), leftMargin, verticalSpace);
    doc.text('__________________________________________________________________________________'
      ,0, verticalSpace + 10);
    verticalSpace += 60;



    for (let mb of this.modblock.notes) {

      doc.text( '*   ' + mb.noteTag, leftMargin, verticalSpace);
      verticalSpace += 20;
      doc.text(mb.noteDetail, leftMargin + 20, verticalSpace)
      verticalSpace += 40;
    }
    doc.save(this.modblock.mbName + '_Notes.pdf');
  }



}
