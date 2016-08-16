import { provideRouter, RouterConfig, RouterModule, Routes }  from '@angular/router';
import { LandingComponent } from './landing'
import { MainComponent } from './main.component'
import { AppComponent } from './app.component'
import { AgendaPreviewComponent } from './agenda.preview.component'
import { Agenda } from '../models/agenda';

const appRoutes: Routes = [
    {
        path: '',
        component: LandingComponent,
        pathMatch: 'full',        
    },
    {
        path: 'agendas',
        component: MainComponent
    },
    {
        path: 'agenda/:id',
        component: AppComponent
    },
    {
        path: 'preview',
        component: AgendaPreviewComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);