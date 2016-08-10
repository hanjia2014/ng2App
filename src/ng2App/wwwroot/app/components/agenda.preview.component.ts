import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';

@Component({
    selector: 'app',
    template: `<h1>Preview</h1>`,
    styles: [``],
    directives: [],
    providers: []
})
export class AgendaPreviewComponent implements OnInit {
    agenda: any;

    ngOnInit() {
    }

    
    constructor() {}
}