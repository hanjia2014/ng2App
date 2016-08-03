import { provideRouter, RouterConfig }  from '@angular/router';
import { LandingComponent } from './landing'
import { MainComponent } from './main.component'
import { AppComponent } from './app.component'

const routes: RouterConfig = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'agendas',
        component: MainComponent
    },
    {
        path: 'agenda/:id',
        component: AppComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];