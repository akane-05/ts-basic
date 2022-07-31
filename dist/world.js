"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var World = /** @class */ (function () {
    function World(message) {
        this.message = message;
    }
    World.prototype.sayHello = function (elem) {
        if (elem) {
            elem.innerText = this.message;
        }
    };
    return World;
}());
exports.default = World;
