import { bootstrap, platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';
import {AppComponent} from './app.component';
import { routing } from './app.routes';
import { LandingComponent } from './landing'
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, provide(APP_BASE_HREF, { useValue: '/' }));
//bootstrap(AppModule, [HTTP_PROVIDERS, routing, provide(APP_BASE_HREF, { useValue: '/' })]).then(
//    (success: any) => console.log('app bootstrapped...'),
//    (error: any) => console.log(error)
//);