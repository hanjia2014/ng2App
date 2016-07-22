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
var agenda_component_1 = require('./agenda.component');
var datepicker_component_1 = require('./plugins/datepicker/datepicker.component');
var AppComponent = (function () {
    function AppComponent(agendaService) {
        var _this = this;
        this.agendaService = agendaService;
        this.dt = new Date();
        this.minDate = void 0;
        this.getItemOfBusinesses = function (agendaId) {
            _this.agendaService.getItemOfBusinesses(13).subscribe(function (items) {
                _this.agenda.ItemOfBusinesses = items;
            }, function (err) { return _this.error = err; });
        };
        this.getAgenda = function () {
            _this.agenda = _this.agendaService.getAgenda(7);
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAgenda();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<h1>Agenda</h1>\n                <div style=\"display:inline-block; min-height:290px;\">\n                    <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\"></datepicker>\n                </div>\n                <agenda-detail [agenda]=\"agenda\">\n                    <div>\n                        This is the end of the agenda\n                    </div>\n                </agenda-detail>",
            styles: [""],
            directives: [agenda_component_1.AgendaComponent, datepicker_component_1.DatePickerComponent],
            providers: [app_services_1.AgendaService]
        }), 
        __metadata('design:paramtypes', [app_services_1.AgendaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map