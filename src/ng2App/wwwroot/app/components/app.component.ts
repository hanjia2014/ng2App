import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/app.services';
import {Agenda} from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {AgendaComponent} from './agenda.component';

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