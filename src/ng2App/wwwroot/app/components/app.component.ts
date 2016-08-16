import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/app.services';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { AgendaComponent } from './agenda.component';
import { Observable }     from 'rxjs/Observable';
import { Response }     from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Dictionary } from '../models/dictionary';
import { ActivatedRoute, Router } from '@angular/router';
import { Tabs } from './plugins/tabs/tabs';
import { Tab } from './plugins/tabs/tab';
import { AgendaPreviewComponent } from './agenda.preview.component';

@Component({
    selector: 'app',
    template: `<h1 style="display:inline-block;">Agenda</h1>
                <a style="margin-top: 20px; margin-bottom: 10px;" [routerLink]="['/agendas']" class="pull-right">Back to list</a>
                <tabs>
                <tab [title]="'Agendas'">
                    <agenda-detail [agenda]="agenda">
                        <div>
                            This is the end of the agenda
                        </div>
                    </agenda-detail>
                    <a href="#" class="btn btn-lg save-button" (click)="saveAgenda($event)">
                        <span class="glyphicon glyphicon-floppy-disk"></span> Save Agenda
                    </a>
                    <a href="#" class="btn btn-lg save-button" (click)="previewAgenda(agenda)">
                        <span class="glyphicon glyphicon glyphicon-eye-open"></span> Preview Agenda
                    </a>
                    <a href="#" class="btn btn-lg save-button pull-right" (click)="printAgenda()">
                        <span class="glyphicon glyphicon-print"></span> Print
                    </a>
                </tab>
                <tab [title]="'Preview'">
                    <agenda-preview [agenda]="agenda"></agenda-preview>
                </tab>
                </tabs>`,
    styles: [`.save-button{
        background-color: #d7f3d7;
        /*border-color: green;
        border-width: thick;*/
        color: darkgreen;
    }`],
    directives: [AgendaComponent, ROUTER_DIRECTIVES, Tabs, Tab, AgendaPreviewComponent],
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

    constructor(private agendaService: AgendaService, private route: ActivatedRoute, private router: Router) {
    }

    saveAgenda = (e: any) => {
        e.preventDefault();
        this.agendaService.saveAgenda(this.agenda).subscribe(
            (data: Response) => {
                
            },
            (err: any) => this.error = err);
    }

    previewAgenda = (agenda: Agenda) => {
        sessionStorage.setItem("previewAgenda", JSON.stringify(agenda));
        this.router.navigateByUrl('/preview');
    }

    printAgenda = () => {
        var doc = new jsPDF();
        var specialElementHandlers = {
            //'#editor': function (element, renderer) {
            //    return true;
            //}
        };
        doc.fromHTML($('#agenda-detail').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    }
}