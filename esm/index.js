import { NgModule } from '@angular/core';
import { MadhuCommonComponentModule } from './componets';
var MadhuCommonModule = (function () {
    function MadhuCommonModule() {
    }
    MadhuCommonModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MadhuCommonComponentModule
                    ]
                },] },
    ];
    /** @nocollapse */
    MadhuCommonModule.ctorParameters = function () { return []; };
    return MadhuCommonModule;
}());
export { MadhuCommonModule };
export * from './componets';
//# sourceMappingURL=index.js.map