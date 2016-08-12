import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: `agenda-preview.html`,
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