import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app',
    template: `<h1>{{previewAgenda.Name}}</h1>`,
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

    
    constructor(private route: ActivatedRoute) {}
}