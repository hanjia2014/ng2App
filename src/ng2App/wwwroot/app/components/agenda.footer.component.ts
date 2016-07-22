import { Component, Input } from '@angular/core';

@Component({
    selector: 'agenda-footer',
    template: `<h3>The total number of nested items: {{subItemLength}}</h3>`,
    styles: [``],
    directives: [],
    providers: []
})
export class AgendaFooterComponent {
    @Input()
    subItemLength: number;
}