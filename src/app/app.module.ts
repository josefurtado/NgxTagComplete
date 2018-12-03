import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxTagCompleteModule } from 'node_modules/ngx-tag-complete';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTagCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
