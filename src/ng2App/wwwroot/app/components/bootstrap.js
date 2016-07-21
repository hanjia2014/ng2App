"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
require('./rxjs-operators');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]).then(function (success) { return console.log('app bootstrapped...'); }, function (error) { return console.log(error); });
//# sourceMappingURL=bootstrap.js.map