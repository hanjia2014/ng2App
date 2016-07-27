"use strict";
var testing_1 = require('@angular/core/testing');
var select_pipes_1 = require('./select-pipes');
testing_1.describe('Component: HighlightPipe', function () {
    testing_1.beforeEachProviders(function () { return [
        select_pipes_1.HighlightPipe
    ]; });
    testing_1.it('should be fine', testing_1.inject([select_pipes_1.HighlightPipe], function (fixture) {
        testing_1.expect(fixture).not.toBeNull();
    }));
});
//# sourceMappingURL=select-pipes.spec.js.map