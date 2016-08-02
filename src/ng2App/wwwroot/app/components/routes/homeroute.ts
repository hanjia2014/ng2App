import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    template: `<h3>Welcome to Home</h3>
                <button type="button" class="btn btn-default" (click)="open()">Open</button>`,
    styles: [],
    directives: [],
    providers: []
})
export class HomeRouteComponent {
    constructor(private router: Router) {
    }

    open = () => {
        this.router.navigate(['/testroute', 18]);
    }
}