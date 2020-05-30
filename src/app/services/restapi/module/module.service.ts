import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Module } from 'src/app/classes/models/module';
import { Globalconstants } from 'src/app/global/globalconstants';
import { Modblock } from 'src/app/classes/models/modblock';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {


  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  public getModules(langId: number){
    return this.httpClient.get<Module[]>(Globalconstants.serverURL+'/module/lang/'+langId);
  }

  public voteUp(modId: string){
    return this.httpClient.get<Module>(Globalconstants.serverURL+ '/module/voteUp/'+modId);
  }

  public voteDown(modId: string){
    return this.httpClient.get<Module>(Globalconstants.serverURL+ '/module/voteDown/'+modId);
  }
  

}
