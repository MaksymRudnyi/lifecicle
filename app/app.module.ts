import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PeekABooComponent } from './peek-a-boo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        PeekABooComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
