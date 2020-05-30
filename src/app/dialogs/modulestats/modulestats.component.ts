import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Chart } from 'chart.js';
import { Module } from 'src/app/classes/models/module';

@Component({
  selector: 'app-modulestats',
  templateUrl: './modulestats.component.html',
  styleUrls: ['./modulestats.component.css']
})
export class ModulestatsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModulestatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  chart = [];
  moduleBlockData: Module[];

  ngOnInit(): void {
    this.moduleBlockData = this.data.moduleList;
    

    this.chart = new Chart( 'canvas', {
      type: 'line',
      data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: this.moduleBlockData[0].modName,
            data: [5, 4, 6 , 8, 4, 7, 8, 9, 5, 5],
            borderColor: '#ec407a',
            backgroundColor: '#880e4f',
            fill: false
          }, 
          {
            label: this.moduleBlockData[1].modName,
            data: [4, 1, 6 , 7, 5, 4, 6, 5, 3, 2],
            borderColor: '#9fa8da',
            backgroundColor: '#1a237e',
            fill: false
          }
        ]
      }
    }
    );
  }





  onCancel(): void {
    this.dialogRef.close();
  }

}

