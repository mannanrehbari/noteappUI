import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ModuleblocksheetComponent } from 'src/app/components/bottomsheets/moduleblocksheet/moduleblocksheet.component';
import { StatuschangeService } from 'src/app/services/bottomsheet/statuschange.service';
import { ModuleService } from 'src/app/services/restapi/module/module.service';
import { Module } from 'src/app/classes/models/module';
import { ModblockService } from 'src/app/services/restapi/modblock/modblock.service';
import { Modblock } from 'src/app/classes/models/modblock';
import { ModulestatsComponent } from 'src/app/dialogs/modulestats/modulestats.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  
  // important 
  langId: number;
  moduleList: Module[];


  constructor(
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    private statusService: StatuschangeService,
    private moduleService: ModuleService,
    private modBlockService: ModblockService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('langId'));
    this.langId = id;

    // get modules from db
    this.moduleService.getModules(this.langId).subscribe((data)=>{
      this.moduleList = data;
    });


    // get modblock name, id, status

    


    this.statusService.newStatusSubject.subscribe(
      data => {
        this.changeStatus(data);
      }
    );
  }

  changeStatus(modblock: any) {
    this.moduleList.find(
      item => item.modId === modblock.modId)
      .modBlocks.find(subItem => subItem.mbId === modblock.mbId)
      .status = modblock.status;
    this.modBlockService.flipStatus(modblock).subscribe();
  }

  showBottomSheet(modblock: any) {
    this.bottomSheet.open(ModuleblocksheetComponent, {
      data: { modblock: modblock },
      panelClass: 'bottom-sheet'
    });
  }

  showDetails(modblock: Modblock) {
    this.router.navigate(['/module/data', modblock.mbId]);
  }

  voteUp(modId: string){
    this.moduleService.voteUp(modId).subscribe((data)=>{
      this.ngOnInit();
    });
  }

  voteDown(modId: string){
    this.moduleService.voteDown(modId).subscribe((data)=>{
      this.ngOnInit();
    });
  }

  goBack(){
    this.router.navigate(['']);
  }

  openStatsDialog(){
    const dialogRef = this.dialog.open(ModulestatsComponent, {
      width: '40pc',
      data: {
        moduleList: this.moduleList
      }
    });
    dialogRef.afterClosed().subscribe( result => {
      
    });
  }




}
