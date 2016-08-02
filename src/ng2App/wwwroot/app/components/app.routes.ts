import { provideRouter, RouterConfig }  from '@angular/router';
import { TestRouteComponent } from './routes/testroute';
import { HomeRouteComponent } from './routes/homeroute';

const routes: RouterConfig = [
    {
        path: '',
        component: HomeRouteComponent
    },
    {
        path: 'testroute',
        component: TestRouteComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];