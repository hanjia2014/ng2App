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
var agenda_1 = require('../models/agenda');
var itemofbusiness_1 = require('../models/itemofbusiness');
var itemofbusiness_component_1 = require('./itemofbusiness.component');
var agenda_footer_component_1 = require('./agenda.footer.component');
var AgendaComponent = (function () {
    function AgendaComponent() {
        var _this = this;
        this.addItemOfBusiness = function () {
            var item = new itemofbusiness_1.ItemOfBusiness();
            item.Name = "New Item";
            _this.agenda.ItemOfBusinesses.push(item);
        };
    }
    AgendaComponent.prototype.ngOnInit = function () {
    };
    AgendaComponent.prototype.ngAfterViewInit = function () {
        (function ($) {
            var panelList = $('#draggableItemList');
            panelList.sortable({
                // Only make the .panel-heading child elements support dragging.
                // Omit this to make then entire <li>...</li> draggable.
                handle: '.panel-heading',
                update: function () {
                    $('.panel', panelList).each(function (index, elem) {
                        var $listItem = $(elem), newIndex = $listItem.index();
                        // Persist the new indices.
                    });
                }
            });
        })(jQuery);
    };
    AgendaComponent.prototype.itemListener = function (item) {
        console.log(item.Name + ' created');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', agenda_1.Agenda)
    ], AgendaComponent.prototype, "agenda", void 0);
    AgendaComponent = __decorate([
        core_1.Component({
            selector: 'agenda-detail',
            templateUrl: "app/templates/agenda-detail.html",
            styles: ["#draggableItemList .panel-heading {\n        cursor: move;\n    }"],
            directives: [itemofbusiness_component_1.ItemOfBusinessComponent, agenda_footer_component_1.AgendaFooterComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AgendaComponent);
    return AgendaComponent;
}());
exports.AgendaComponent = AgendaComponent;
//# sourceMappingURL=agenda.component.js.map