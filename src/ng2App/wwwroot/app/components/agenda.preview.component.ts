import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app',
    template: `<div class="container">
                <div id="preview-detail">
                <h1>Preview - Agenda</h1>
                <span style="color: red">{{previewAgenda.Name}}</span>
                </div>
                <a href="#" class="btn btn-lg save-button pull-right" (click)="printAgenda()">
                    <span class="glyphicon glyphicon-print"></span> Print
                </a>
                </div>
                `,
    styles: [``],
    directives: [],
    providers: []
})
export class AgendaPreviewComponent implements OnInit {
    previewAgenda: Agenda;
    sub: any;

    ngOnInit() {
        var previewAgendaString = sessionStorage.getItem("previewAgenda");
        this.previewAgenda = JSON.parse(previewAgendaString);
    }

    printAgenda() {
        return xepOnline.Formatter.Format('preview-detail', { render: 'download' });
    }
    
    constructor(private route: ActivatedRoute) {}
}