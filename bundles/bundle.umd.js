(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.cargosteps = {}),global._angular_core));
}(this, (function (exports,_angular_core) { 'use strict';

var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'madhu-helloworld',
                    template: "<h1> My Component </h1>"
                },] },
    ];
    /** @nocollapse */
    HelloWorldComponent.ctorParameters = function () { return []; };
    return HelloWorldComponent;
}());

var MadhuCommonComponentModule = (function () {
    function MadhuCommonComponentModule() {
    }
    MadhuCommonComponentModule.decorators = [
        { type: _angular_core.NgModule, args: [{
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

var MadhuCommonModule = (function () {
    function MadhuCommonModule() {
    }
    MadhuCommonModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        MadhuCommonComponentModule
                    ]
                },] },
    ];
    /** @nocollapse */
    MadhuCommonModule.ctorParameters = function () { return []; };
    return MadhuCommonModule;
}());

exports.MadhuCommonModule = MadhuCommonModule;
exports.MadhuCommonComponentModule = MadhuCommonComponentModule;
exports.HelloWorldComponent = HelloWorldComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
