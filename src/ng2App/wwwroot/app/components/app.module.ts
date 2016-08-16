import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingComponent }  from './landing';
import { MainComponent } from './main.component'
import { AppComponent } from './app.component'
import { AgendaPreviewComponent } from './agenda.preview.component'

import { routing }        from './app.routes';

@NgModule({
    imports: [routing],
    declarations: [LandingComponent, MainComponent, AppComponent, AgendaPreviewComponent],
    bootstrap: [LandingComponent]
})
export class AppModule { }