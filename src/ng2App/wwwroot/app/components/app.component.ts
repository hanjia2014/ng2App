﻿import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/app.services';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { AgendaComponent } from './agenda.component';
import { Observable }     from 'rxjs/Observable';
import { Response }     from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Dictionary } from '../models/dictionary';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app',
    template: `<h1>Agenda<a [routerLink]="['/agendas']" class="pull-right">Back to list</a></h1>
                <agenda-detail [agenda]="agenda">
                    <div>
                        This is the end of the agenda
                    </div>
                </agenda-detail>
                <a href="#" class="btn btn-lg save-button" (click)="saveAgenda()">
                    <span class="glyphicon glyphicon-floppy-disk"></span> Save Agenda
                </a>`,
    styles: [`.save-button{
        background-color: #d7f3d7;
        border-color: green;
        border-width: thick;
        color: darkgreen;
    }`],
    directives: [AgendaComponent, ROUTER_DIRECTIVES],
    providers: [AgendaService]
})
export class AppComponent implements OnInit {
    agenda: Agenda = new Agenda();
    error: any;
    public dt: Date = new Date();
    public minDate: Date = void 0;
    sub: any;
    id: number;

    getAgenda = (agenda: Agenda) => {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.agendaService.getAgenda(this.id).subscribe(
            (data: Agenda) => {
                Object.assign(agenda, data);
            },
            (err: any) => this.error = err);
    }

    ngOnInit() {
        this.getAgenda(this.agenda);
    }

    constructor(private agendaService: AgendaService, private route: ActivatedRoute) {
    }

    saveAgenda = () => {
        this.agendaService.saveAgenda(this.agenda).subscribe(
            (data: Response) => {
                
            },
            (err: any) => this.error = err);
    }
}