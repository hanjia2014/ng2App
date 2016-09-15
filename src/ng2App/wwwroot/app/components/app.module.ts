import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy }   from '@angular/common';
import { LandingComponent }  from './landing';
import { MainComponent } from './main.component';
import { AppComponent } from './app.component';
import { routing }        from './app.routes';

import { ItemOfBusinessComponent } from './itemofbusiness.component';
import { AgendaComponent } from './agenda.component';
import { Tabs } from './plugins/tabs/tabs';
import { Tab } from './plugins/tabs/tab';
import { AgendaPreviewComponent } from './agenda.preview.component';
import { DatePickerComponent } from './plugins/datepicker';
import { AgendaFooterComponent } from './agenda.footer.component';

import { HearingOfEvidenceComponent } from './hearingofevidence.component';
import { SortableBase } from './base.sortable.component';
import { Select2Component } from './plugins/select2';
import { MODAL_DIRECTIVES, ModalComponent } from './plugins/ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],
    declarations: [MODAL_DIRECTIVES, LandingComponent, MainComponent, AppComponent, AgendaPreviewComponent, Tabs, Tab, AgendaComponent, ItemOfBusinessComponent, DatePickerComponent, AgendaFooterComponent, HearingOfEvidenceComponent, Select2Component],
    bootstrap: [LandingComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }