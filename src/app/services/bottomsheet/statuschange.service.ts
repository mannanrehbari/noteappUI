import { Injectable } from '@angular/core';

import {Subject} from  'rxjs';
import { Modblock } from 'src/app/classes/models/modblock';

@Injectable({
  providedIn: 'root'
})
export class StatuschangeService {

  public newStatusSubject = new Subject<any>();

  constructor() { }

  changeModStatus(modBlock: Modblock){
    var statusChangeObj = modBlock;
    this.newStatusSubject.next(statusChangeObj);
  }
  
}
