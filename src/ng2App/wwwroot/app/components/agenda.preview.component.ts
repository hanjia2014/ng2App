import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'agenda-preview',
    templateUrl: `app/templates/agenda-preview.html`,
    styles: [``],
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