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
var http_1 = require('@angular/http');
var agenda_1 = require('../models/agenda');
var witness_1 = require('../models/witness');
var organisationindividual_1 = require('../models/organisationindividual');
var hearingofevidence_1 = require('../models/hearingofevidence');
var itemofbusiness_1 = require('../models/itemofbusiness');
var AgendaService = (function () {
    function AgendaService(http) {
        this.http = http;
        this.apiUrl = '/umbraco/api/events/GetEventsOverview/?alias=event';
    }
    AgendaService.prototype.getItemOfBusinesses = function (agendaId) {
        return this.http.get(this.apiUrl).map(function (res) {
            if (res.status != 200) {
                throw new Error('No objects to retrieve! code status ' + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AgendaService.prototype.getAgenda = function (id) {
        var witness = new witness_1.Witness();
        witness.Name = "John Doe";
        witness.Position = "Staff";
        var organisation = new organisationindividual_1.OrganisationIndividual();
        organisation.Name = "Org One";
        organisation.Witnesses = new Array();
        organisation.Witnesses.push(witness);
        var hearing = new hearingofevidence_1.HearingOfEvidence();
        hearing.Name = "Hearing One";
        hearing.Organisations = new Array();
        hearing.Organisations.push(organisation);
        var itemofbusiness = new itemofbusiness_1.ItemOfBusiness();
        itemofbusiness.Name = "Item One";
        itemofbusiness.HearingOfEvidences = new Array();
        itemofbusiness.HearingOfEvidences.push(hearing);
        var agenda = new agenda_1.Agenda();
        agenda.ItemOfBusinesses = new Array();
        agenda.ItemOfBusinesses.push(itemofbusiness);
        return agenda;
    };
    AgendaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AgendaService);
    return AgendaService;
    var _a;
}());
exports.AgendaService = AgendaService;
//# sourceMappingURL=app.services.js.map