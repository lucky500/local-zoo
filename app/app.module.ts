import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AgeFilterPipe } from './agefilter.pipe';

import { AppComponent }   from './app.component';
import { AppListComponent } from './list/app-list.component';
import { AppEditComponent } from './edit/app-edit.component';
import { AppNewComponent } from './new/app-new.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    ],
  declarations: [ 
    AppComponent,
    AppListComponent,
    AppEditComponent,
    AppNewComponent,
    AgeFilterPipe 
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
