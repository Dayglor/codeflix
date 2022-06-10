"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidIdError extends Error {
    constructor(message) {
        super(message || 'Id invalid - 123');
        this.name = 'InvalidUniqueIdentifier';
    }
}
exports.default = InvalidIdError;
