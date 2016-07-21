"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basemodel_1 = require('./basemodel');
var HearingOfEvidence = (function (_super) {
    __extends(HearingOfEvidence, _super);
    function HearingOfEvidence() {
        _super.call(this);
        this.Organisations = new Array();
    }
    return HearingOfEvidence;
}(basemodel_1.BaseModel));
exports.HearingOfEvidence = HearingOfEvidence;
//# sourceMappingURL=hearingofevidence.js.map