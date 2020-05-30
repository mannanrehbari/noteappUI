import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './components/main/language/language.component';
import { ModulesComponent } from './components/main/language/modules/modules.component';
import { ModuledataComponent } from './components/main/language/modules/moduledata/moduledata.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginguardService } from './services/auth/guards/loginguard.service';




const routes: Routes = [
  { path: '', component: LanguageComponent, canActivate: [LoginguardService]},
  { path: 'language/:langId', component: ModulesComponent, canActivate: [LoginguardService]},
  { path: 'module/data/:mbId', component: ModuledataComponent, canActivate: [LoginguardService]},
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
