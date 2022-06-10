"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invalid_id_error_1 = __importDefault(require("./invalid-id-error"));
describe('Test invalid id error unit', () => {
    it('should create an instance', () => {
        const error = new invalid_id_error_1.default();
        expect(error).toBeTruthy();
    });
});
