import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavpanelComponent } from './components/common/navpanel/navpanel.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


// material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';



import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LanguageComponent } from './components/main/language/language.component';
import { ModulesComponent } from './components/main/language/modules/modules.component';
import { ModuleblocksheetComponent } from './components/bottomsheets/moduleblocksheet/moduleblocksheet.component';

import { ModuledataComponent } from './components/main/language/modules/moduledata/moduledata.component';
import { AddnotesheetComponent } from './components/bottomsheets/addnotesheet/addnotesheet.component';
import { AddlinksheetComponent } from './components/bottomsheets/addlinksheet/addlinksheet.component';
import { AuthComponent } from './components/auth/auth.component';
import { ModulestatsComponent } from './dialogs/modulestats/modulestats.component';
import { AuthService } from './services/auth/auth.service';
import { HttpinterceptorService } from './services/auth/httpinterceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    NavpanelComponent,
    FooterComponent,
    LanguageComponent,
    ModulesComponent,
    ModuleblocksheetComponent,
    ModuledataComponent,
    AddnotesheetComponent,
    AddlinksheetComponent,
    AuthComponent,
    ModulestatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatBottomSheetModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
