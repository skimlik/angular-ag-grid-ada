import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, GridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
