import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globalconstants } from 'src/app/global/globalconstants';
import { Modblock } from 'src/app/classes/models/modblock';
import { Module } from 'src/app/classes/models/module';
import { Note } from 'src/app/classes/models/note';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModblockService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  public flipStatus(modblock: Modblock){
    return this.httpClient.post<Modblock>(Globalconstants.serverURL+'/modblock/status/flip',  modblock);
  }

  public getById(mbId: string){
    return this.httpClient.get<Modblock>(Globalconstants.serverURL + '/modblock/' +mbId);
  }

  public getNotes(mbId: string){
    return this.httpClient.get<Note[]>(Globalconstants.serverURL + '/note/'+mbId);
  }

  public addNote(note: Note){
    return this.httpClient.post<Note>(Globalconstants.serverURL + "/note/add/", note);
  }

  public deleteNote(note: Note){
    return this.httpClient.get<boolean>(Globalconstants.serverURL + "/note/delete/" + note.noteId);
  }

}
