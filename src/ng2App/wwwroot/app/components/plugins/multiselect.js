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
var core_2 = require('@angular/core');
var SearchTextPipe = (function () {
    function SearchTextPipe() {
    }
    SearchTextPipe.prototype.transform = function (items, args) {
        var searchKey = args[0], label = args[1];
        if (searchKey == '' || searchKey == undefined) {
            return items;
        }
        return items.filter(function (item) { return item[label].indexOf(searchKey) !== -1; });
    };
    SearchTextPipe = __decorate([
        core_2.Pipe({
            name: "searchText"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchTextPipe);
    return SearchTextPipe;
}());
var Multiselect = (function () {
    function Multiselect() {
        this.toggleSelectState = 'none';
        this.multiselectHeader = '';
        this.modelUpdated = new core_1.EventEmitter();
    }
    Multiselect.prototype.ngOnInit = function () {
        this.multiselectHeader = this.header || 'Select';
    };
    Multiselect.prototype.toggleSelect = function () {
        if (this.toggleSelectState == 'none') {
            this.toggleSelectState = 'block';
        }
        else {
            this.toggleSelectState = 'none';
        }
    };
    Multiselect.prototype.checkAll = function () {
        if (this.multiple != true) {
            return;
        }
        this.collection.forEach(function (t) { return t.checked = true; });
        this.updateMultipleModel();
    };
    Multiselect.prototype.unCheckAll = function () {
        this.collection.forEach(function (t) { return t.checked = false; });
        this.updateMultipleModel();
    };
    Multiselect.prototype.selectItem = function (item) {
        item.checked = !item.checked;
        if (this.multiple != true) {
            this.updateSingleModel(item);
        }
        else {
            this.updateMultipleModel();
        }
    };
    Multiselect.prototype.updateSingleModel = function (item) {
        this.mutiselectModel = item;
        this.updateSimpleHeader();
        this.modelUpdated.emit(this.mutiselectModel);
        this.toggleSelect();
    };
    Multiselect.prototype.updateMultipleModel = function () {
        this.mutiselectModel = [];
        for (var _i = 0, _a = this.collection; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.checked) {
                this.mutiselectModel.push(value);
            }
        }
        this.updateMultipleHeader();
        this.modelUpdated.emit(this.mutiselectModel);
    };
    Multiselect.prototype.updateMultipleHeader = function () {
        if (this.mutiselectModel.length > 0) {
            this.multiselectHeader = this.mutiselectModel.length;
        }
        else {
            this.multiselectHeader = this.header;
        }
    };
    Multiselect.prototype.updateSimpleHeader = function () {
        this.multiselectHeader = this.mutiselectModel[this.label];
    };
    __decorate([
        core_1.Input('collection'), 
        __metadata('design:type', Object)
    ], Multiselect.prototype, "collection", void 0);
    __decorate([
        core_1.Input('multiple'), 
        __metadata('design:type', Boolean)
    ], Multiselect.prototype, "multiple", void 0);
    __decorate([
        core_1.Input('label'), 
        __metadata('design:type', String)
    ], Multiselect.prototype, "label", void 0);
    __decorate([
        core_1.Input('header'), 
        __metadata('design:type', String)
    ], Multiselect.prototype, "header", void 0);
    __decorate([
        core_1.Input('mutiselectModel'), 
        __metadata('design:type', Object)
    ], Multiselect.prototype, "mutiselectModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Multiselect.prototype, "modelUpdated", void 0);
    Multiselect = __decorate([
        core_1.Component({
            selector: 'multiselect',
            pipes: [SearchTextPipe],
            template: "<div class=\"btn-group\">\n                <button class=\"btn btn-default dropdown-toggle\" (click)=\"toggleSelect()\">\n                    {{multiselectHeader}}<span class=\"caret\"></span>\n                </button>\n                <div class=\"dropdown-menu\" [ngStyle]=\"{'display': toggleSelectState}\">\n                    <div class=\"dropdown-header\">\n                        <div>\n                            <input [(ngModel)]=\"filterModel\"\n                                   class=\"form-control input-sm\" type=\"text\" autofocus=\"autofocus\" placeholder=\"Filter\">\n                        </div>\n                        <div *ngIf=\"multiple\">\n                            <button (click)=\"checkAll()\" class=\"btn btn-link btn-xs\">\n                                <i class=\"glyphicon glyphicon-ok\"></i>Check all\n                            </button>\n                            <button (click)=\"unCheckAll()\" class=\"btn btn-link btn-xs\">\n                                <i class=\"glyphicon glyphicon-remove\"></i>Uncheck all\n                            </button>\n                        </div>\n                    </div>\n                    <ul>\n                        <li *ngFor=\"let item of collection\">\n                            <a class=\"checked\" (click)=\"selectItem(item)\"><i class=\"glyphicon\"></i>{{item[label]}}</a>\n                        </li>\n                    </ul>\n\n                </div>\n            </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], Multiselect);
    return Multiselect;
}());
exports.Multiselect = Multiselect;
//# sourceMappingURL=multiselect.js.map