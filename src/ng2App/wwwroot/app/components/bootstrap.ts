import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './rxjs-operators';
import {AppComponent} from './app.component';
import { routing } from './app.routes';
import { LandingComponent } from './landing'
import {APP_BASE_HREF} from '@angular/common';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);