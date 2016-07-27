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
var itemofbusiness_1 = require('../models/itemofbusiness');
var HearingOfEvidence_1 = require('../models/HearingOfEvidence');
var hearingofevidence_component_1 = require('./hearingofevidence.component');
var multiselect_1 = require('./plugins/multiselect');
var ng2_select_1 = require('./plugins/ng2-select/ng2-select');
var ItemOfBusinessComponent = (function () {
    function ItemOfBusinessComponent() {
        var _this = this;
        this.itemUpdateOutput = new core_1.EventEmitter();
        this.multiselectModel = [];
        this.subItemTypes = [];
        this.addSubItem = function () {
            var subItemType = _this.multiselectModel['name'];
            if (subItemType == "Hearing Of Evidence")
                _this.addHearing();
        };
        this.addHearing = function () {
            var hearing = new HearingOfEvidence_1.HearingOfEvidence();
            hearing.Name = "new hearing";
            _this.item.HearingOfEvidences.push(hearing);
            _this.itemUpdateOutput.next(hearing);
        };
        //public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        //    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        //    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
        //    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
        //    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
        //    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
        //    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
        //    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
        //    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];
        this.items = [{ id: 1, text: "Hearing Of Evidence" }, { id: 2, text: "Consideration" }, { id: 3, text: "Free Text" }];
        this.value = ['Athens'];
        this._disabledV = '0';
        this.disabled = false;
        this.addItem = function () {
            var subItemType = _this.selectedItem['text'];
            if (subItemType == "Hearing Of Evidence")
                _this.addHearing();
        };
    }
    ItemOfBusinessComponent.prototype.subItemTypeSelected = function (multiselectModel) {
        this.multiselectModel = multiselectModel;
    };
    ItemOfBusinessComponent.prototype.ngOnInit = function () {
        this.subItemTypes = [{ id: 1, name: "Hearing Of Evidence" }, { id: 2, name: "Consideration" }, { id: 3, name: "Free Text" }];
    };
    ItemOfBusinessComponent.prototype.ngAfterViewInit = function () {
        (function ($) {
            var panelList = $('#draggableHearinglList');
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
    Object.defineProperty(ItemOfBusinessComponent.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    ItemOfBusinessComponent.prototype.selected = function (value) {
        this.selectedItem = value;
    };
    ItemOfBusinessComponent.prototype.removed = function (value) {
        this.selectedItem == null;
    };
    ItemOfBusinessComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    ItemOfBusinessComponent.prototype.itemsToString = function (value) {
        if (value === void 0) { value = []; }
        return value
            .map(function (item) {
            return item.text;
        }).join(',');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', itemofbusiness_1.ItemOfBusiness)
    ], ItemOfBusinessComponent.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemOfBusinessComponent.prototype, "itemUpdateOutput", void 0);
    ItemOfBusinessComponent = __decorate([
        core_1.Component({
            selector: 'item-of-business',
            templateUrl: "app/templates/item-of-business.html",
            styles: ["#draggableHearinglList .panel-heading {\n        cursor: move;\n    }"],
            directives: [hearingofevidence_component_1.HearingOfEvidenceComponent, multiselect_1.Multiselect, ng2_select_1.SELECT_DIRECTIVES],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ItemOfBusinessComponent);
    return ItemOfBusinessComponent;
}());
exports.ItemOfBusinessComponent = ItemOfBusinessComponent;
//# sourceMappingURL=itemofbusiness.component.js.map