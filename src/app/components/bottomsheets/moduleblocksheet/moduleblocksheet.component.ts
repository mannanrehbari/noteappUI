import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import {StatuschangeService} from './../../../services/bottomsheet/statuschange.service';
import { Modblock } from 'src/app/classes/models/modblock';


@Component({
  selector: 'app-moduleblocksheet',
  templateUrl: './moduleblocksheet.component.html',
  styleUrls: ['./moduleblocksheet.component.css']
})
export class ModuleblocksheetComponent implements OnInit {

  modBlock: Modblock;


  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public statusService: StatuschangeService
  ) {
    this.modBlock = data.modblock;

  }

  ngOnInit(): void {
    
  }

  changeStatus(){
    this.modBlock.status = !this.modBlock.status;
    this.statusService.changeModStatus(this.modBlock);
  }

}
