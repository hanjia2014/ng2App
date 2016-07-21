"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basemodel_1 = require('./basemodel');
var OrganisationIndividual = (function (_super) {
    __extends(OrganisationIndividual, _super);
    function OrganisationIndividual() {
        _super.call(this);
        this.Witnesses = new Array();
    }
    return OrganisationIndividual;
}(basemodel_1.BaseModel));
exports.OrganisationIndividual = OrganisationIndividual;
//# sourceMappingURL=OrganisationIndividual.js.map