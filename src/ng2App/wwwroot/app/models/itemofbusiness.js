"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basemodel_1 = require('./basemodel');
var ItemOfBusiness = (function (_super) {
    __extends(ItemOfBusiness, _super);
    function ItemOfBusiness() {
        _super.call(this);
        this.HearingOfEvidences = new Array();
    }
    return ItemOfBusiness;
}(basemodel_1.BaseModel));
exports.ItemOfBusiness = ItemOfBusiness;
//# sourceMappingURL=itemofbusiness.js.map