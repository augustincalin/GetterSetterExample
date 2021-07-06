import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetterSetterComponent } from './getter-setter/getter-setter.component';
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    GetterSetterComponent,
    OnChangesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
