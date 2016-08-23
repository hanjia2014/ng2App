import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`,
    styles: [],
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class LandingComponent implements OnInit {
    constructor(private router: Router) {
        
    }
    ngOnInit() {
        this.router.navigate(['/agendas']);
    }
}