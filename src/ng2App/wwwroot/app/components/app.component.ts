import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/app.services';
import {Agenda} from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {AgendaComponent} from './agenda.component';
import {DatePickerComponent} from './plugins/datepicker/datepicker.component';

@Component({
    selector: 'app',
    template: `<h1>Agenda</h1>
                <!--<div style="display:inline-block; min-height:290px;">
                    <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
                </div>-->
                <agenda-detail [agenda]="agenda">
                    <div>
                        This is the end of the agenda
                    </div>
                </agenda-detail>`,
    styles: [``],
    directives: [AgendaComponent, DatePickerComponent],
    providers: [AgendaService]
})
export class AppComponent implements OnInit {
    agenda: Agenda;
    error: any;
    public dt: Date = new Date();
    public minDate: Date = void 0;
    getItemOfBusinesses = (agendaId: number) => {
        this.agendaService.getItemOfBusinesses(13).subscribe(
            (items: ItemOfBusiness[]) => {
                this.agenda.ItemOfBusinesses = items;
            },
            (err: any) => this.error = err);
    }

    getAgenda = () => {
        this.agenda = this.agendaService.getAgenda(7);
    }

    ngOnInit() {
        this.getAgenda();
    }

    constructor(private agendaService: AgendaService) {
        
    }
}