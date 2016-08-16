import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LandingComponent }  from './landing';
import { MainComponent } from './main.component'
import { AppComponent } from './app.component'
import { AgendaPreviewComponent } from './agenda.preview.component'

import { routing }        from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],
    declarations: [LandingComponent, MainComponent, AppComponent, AgendaPreviewComponent],
    bootstrap: [LandingComponent]
})
export class AppModule { }