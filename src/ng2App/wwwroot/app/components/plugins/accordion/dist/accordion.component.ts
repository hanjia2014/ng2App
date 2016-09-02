import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ecrm-accordion',
    template: `<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                < ng - content > </ng-content>  
                </div>`,
    //styles: [ require('./accordion.component.scss') ]
})
export class AccordionCmp implements OnInit {
    constructor() { }

    ngOnInit() { }

}