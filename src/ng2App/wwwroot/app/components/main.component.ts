import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AgendaService } from '../services/app.services';
import { Agenda } from '../models/agenda';
import { AgendaSummary } from '../models/agendasummary';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { Observable }     from 'rxjs/Observable';
import { Response }     from '@angular/http';
import { Dictionary } from '../models/dictionary';
import { SortableBase } from './base.sortable.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: `app/templates/main.html`,
    styles: [`.panel-heading {
                    cursor: move;
              }
            `],
    directives: [],
    providers: [AgendaService]
})
export class MainComponent extends SortableBase implements OnInit, AfterViewInit {
    agendas: Array<AgendaSummary> = new Array<AgendaSummary>();
    error: any;

    getAgendaList = () => {
        this.agendaService.getAgendaList().subscribe(
            (data: Array<AgendaSummary>) => {
                Object.assign(this.agendas, data);
            },
            (err: any) => this.error = err);
    }

    ngOnInit() {
        this.getAgendaList();
        this.SortableListId = 'draggableAgendalList';
    }

    constructor(private agendaService: AgendaService, private router: Router) {
        super();
    }

    openAgenda = (id: number) => {
        this.router.navigate(['/agenda', id]);
    }
}