function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ("value" in desc || desc.initializer) {
        desc.writable = true;
    }
    desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    var own = Object.getOwnPropertyDescriptor(target, property);
    if (own && (own.get || own.set)) {
        delete desc.writable;
        delete desc.initializer;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
var _class, _descriptor;
// @ts-nocheck
const returnValue = "asdasd";
let TestClass2 = ((_class = class TestClass2 {
    constructor(){
        _initializerDefineProperty(this, "testProperty", _descriptor, this);
    }
}) || _class, _descriptor = _applyDecoratedDescriptor(_class.prototype, "testProperty", [
    deco
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _class);
function deco(target, key) {
    Object.defineProperty(target.constructor.prototype, key, {
        value: returnValue,
        enumerable: true,
        configurable: true
    });
}
const instance = new TestClass2();
console.log(instance.testProperty);
