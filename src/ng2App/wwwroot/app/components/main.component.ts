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
import { Tabs } from './plugins/tabs/tabs';
import { Tab } from './plugins/tabs/tab';
import { SpinnerComponent } from './plugins/spinner/spinner';

@Component({
    selector: 'app',
    templateUrl: `app/templates/main.html`,
    styles: [`.panel-heading {
                    cursor: move;
              }
            `],
    directives: [Tabs, Tab, SpinnerComponent],
    providers: [AgendaService]
})
export class MainComponent extends SortableBase implements OnInit, AfterViewInit {
    agendas: Array<AgendaSummary> = new Array<AgendaSummary>();
    error: any;
    isRequesting: boolean;

    getAgendaList = () => {
        this.agendaService.getAgendaList().subscribe(
            (data: Array<AgendaSummary>) => {
                Object.assign(this.agendas, data);
                this.isRequesting = false;
            },
            (err: any) => this.error = err);
    }

    ngOnInit() {
        this.isRequesting = true;
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