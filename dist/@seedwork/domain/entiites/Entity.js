"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("../identificationGenerator/implementations/uuid"));
class Entity {
    constructor(props, _identificationGenerator) {
        this.props = props;
        this._identificationGenerator = _identificationGenerator;
        const identificationGenerator = _identificationGenerator || new uuid_1.default();
        this._id = props.id || identificationGenerator.generateId();
        this._createdAt = props.createdAt || new Date();
        this._updatedAt = props.updatedAt || new Date();
        this._removedAt = props.removedAt || null;
    }
    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    get removedAt() {
        return this._removedAt;
    }
    set removedAt(date) {
        this._removedAt = date || new Date();
    }
    toJSON() {
        return {
            id: this.id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            removedAt: this.removedAt,
            ...this.props
        };
    }
}
exports.default = Entity;
