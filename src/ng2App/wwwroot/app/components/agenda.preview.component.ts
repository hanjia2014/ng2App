import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'agenda-preview',
    template: `<div class="container">
                    <div id="preview-detail">
                        <h1>Preview - Agenda</h1>
                        <span style="color: red">{{previewAgenda.Name}}</span><span> Item of Business ({{previewAgenda.ItemOfBusinesses.length}})</span>
                    </div>
                    <a href="#" class="btn btn-lg save-button pull-right" (click)="printAgenda()">
                        <span class="glyphicon glyphicon-print"></span> Print
                    </a>
                </div>`,
    styles: [``],
    directives: [],
    providers: []
})
export class AgendaPreviewComponent implements OnInit {
    previewAgenda: Agenda;
    sub: any;
    @Input()
    agenda: Agenda;

    ngOnInit() {
        var previewAgendaString = sessionStorage.getItem("previewAgenda");
        this.previewAgenda = JSON.parse(previewAgendaString);
        if (this.previewAgenda == null)
            this.previewAgenda = this.agenda;
    }

    printAgenda() {
        return xepOnline.Formatter.Format('preview-detail', { render: 'download' });
    }
    
    constructor(private route: ActivatedRoute) {}
}