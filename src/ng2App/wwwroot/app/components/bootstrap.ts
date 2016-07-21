import {bootstrap} from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';
import {AppComponent} from './app.component';
bootstrap(AppComponent, [HTTP_PROVIDERS]).then(
    (success: any) => console.log('app bootstrapped...'),
    (error: any) => console.log(error)
);