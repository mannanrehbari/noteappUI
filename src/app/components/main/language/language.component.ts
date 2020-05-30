import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {LanguageService} from '../../../services/restapi/language/language.service';
import { Language } from 'src/app/classes/models/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {


  languages: Language[];

  constructor(
    private router: Router,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe((data)=>{
      this.languages = data;
    });
  }

  onSelect(lang){
    this.router.navigate(['/language', lang.id]);
  }

  voteUp(id: string){
    this.languageService.voteUp(id).subscribe((data) => {
      this.ngOnInit();
    });
  }

  voteDown(id: string){
    this.languageService.voteDown(id).subscribe((data) => {
      this.ngOnInit();
    });
  }

  

}
