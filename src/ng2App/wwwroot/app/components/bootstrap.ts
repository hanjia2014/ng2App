import {bootstrap} from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';
import {AppComponent} from './app.component';
import { appRouterProviders } from './app.routes';

import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders, provide(APP_BASE_HREF, { useValue: '/' })]).then(
    (success: any) => console.log('app bootstrapped...'),
    (error: any) => console.log(error)
);