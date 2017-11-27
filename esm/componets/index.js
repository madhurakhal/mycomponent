import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './helloworld.component';
export { HelloWorldComponent } from './helloworld.component';
var MadhuCommonComponentModule = (function () {
    function MadhuCommonComponentModule() {
    }
    MadhuCommonComponentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HelloWorldComponent
                    ],
                    exports: [
                        HelloWorldComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    MadhuCommonComponentModule.ctorParameters = function () { return []; };
    return MadhuCommonComponentModule;
}());
export { MadhuCommonComponentModule };
//# sourceMappingURL=index.js.map