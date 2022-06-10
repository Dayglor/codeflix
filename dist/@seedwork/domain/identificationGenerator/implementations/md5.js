"use strict";
// import { md5 } from 'md5';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
class Md5 {
    generateId() {
        return (0, md5_1.default)(`${new Date().getTime() + Math.random()}`);
    }
}
exports.default = Md5;
