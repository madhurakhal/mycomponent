import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HellowroldComponent } from './hellowrold/hellowrold.component';

@NgModule({
  declarations: [
    AppComponent,
    HellowroldComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HellowroldComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ShareAppModule { }
