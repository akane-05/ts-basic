"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var world_1 = __importDefault(require("./world"));
var root = document.getElementById('root');
var world = new world_1.default("Hello test!");
world.sayHello(root);
