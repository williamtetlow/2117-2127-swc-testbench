"use strict";
// @ts-nocheck
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const returnValue = "asdasd";
class TestClass2 {
    testProperty;
}
__decorate([
    deco
], TestClass2.prototype, "testProperty", void 0);
function deco(target, key) {
    Object.defineProperty(target.constructor.prototype, key, {
        value: returnValue,
        enumerable: true,
        configurable: true,
    });
}
const instance = new TestClass2();
console.log(instance.testProperty);
