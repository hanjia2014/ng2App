import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app',
    template: `<h3>Hello from sub page {{id}}</h3>`,
    styles: [],
    directives: [],
    providers: []
})
export class TestRouteComponent {
    id: number;
    sub: any;
    constructor(private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }
}