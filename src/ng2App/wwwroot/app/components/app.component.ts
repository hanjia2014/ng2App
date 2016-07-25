import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/app.services';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { AgendaComponent } from './agenda.component';
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: 'app',
    template: `<h1>Agenda</h1>
                <agenda-detail [agenda]="agenda">
                    <div>
                        This is the end of the agenda
                    </div>
                </agenda-detail>`,
    styles: [``],
    directives: [AgendaComponent],
    providers: [AgendaService]
})
export class AppComponent implements OnInit {
    agenda: Agenda;
    error: any;
    public dt: Date = new Date();
    public minDate: Date = void 0;

    getAgenda = () => {
        this.agendaService.getAgenda(7).subscribe(
            (data: Agenda) => {
                this.agenda = data;
            },
            (err: any) => this.error = err);;
    }

    ngOnInit() {
        this.getAgenda();
    }

    constructor(private agendaService: AgendaService) {
    }
}