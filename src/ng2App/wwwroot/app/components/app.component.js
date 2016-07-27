"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_services_1 = require('../services/app.services');
var agenda_1 = require('../models/agenda');
var agenda_component_1 = require('./agenda.component');
var AppComponent = (function () {
    function AppComponent(agendaService) {
        var _this = this;
        this.agendaService = agendaService;
        this.agenda = new agenda_1.Agenda();
        this.dt = new Date();
        this.minDate = void 0;
        this.getAgenda = function (agenda) {
            _this.agendaService.getAgenda(7).subscribe(function (data) {
                Object.assign(agenda, data);
            }, function (err) { return _this.error = err; });
            ;
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAgenda(this.agenda);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<h1>Agenda</h1>\n                <agenda-detail [agenda]=\"agenda\">\n                    <div>\n                        This is the end of the agenda\n                    </div>\n                </agenda-detail>",
            styles: [""],
            directives: [agenda_component_1.AgendaComponent],
            providers: [app_services_1.AgendaService]
        }), 
        __metadata('design:paramtypes', [app_services_1.AgendaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map