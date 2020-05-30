import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globalconstants } from 'src/app/global/globalconstants';
import { Language } from 'src/app/classes/models/language';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient: HttpClient,
    private authService: AuthService) { }

  public getLanguages(){
    return this.httpClient.get<Language[]>(Globalconstants.serverURL+'/language/all');
  }

  public voteUp(id: string){
    return this.httpClient.get<Language>(Globalconstants.serverURL+'/language/voteup/'+id);
  }

  public voteDown(id: string){
    return this.httpClient.get<Language>(Globalconstants.serverURL+'/language/votedown/'+id);
  }






}
