"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const Entity_1 = __importDefault(require("../../../@seedwork/domain/entiites/Entity"));
const invalid_id_error_1 = __importDefault(require("../../../@seedwork/errors/invalid-id-error"));
class Category extends Entity_1.default {
    // private description: string
    constructor(props, identificationGenerator) {
        super(props, identificationGenerator);
        this.identificationGenerator = identificationGenerator;
        // this.id = props.id || identificationGenerator.generateId();
        this.name = props.name;
        this.description = props.description || '';
        // this.createdAt = this.props.createdAt || new Date();
        // this.updatedAt = this.props.updatedAt || new Date();
        this.isActive = this.props.isActive || false;
        this.validate();
    }
    validate() {
        if (!this.id) {
            throw new invalid_id_error_1.default('empty id');
        }
    }
    // public toJSON(): CategoryPropsOutput {
    //     // console.log(this)
    //     return {
    //         id: this.id,
    //         name: this.name,
    //         description: this.description,
    //         createdAt: this.createdAt,
    //         updatedAt: this.updatedAt,
    //         isActive: this.isActive,
    //         removedAt: this.removedAt
    //     };
    // }
    // get id() : string {
    //     return this.props.id;
    // }
    get description() {
        return this.props.description;
    }
    get isActive() {
        return this.props.isActive;
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    // get createdAt(): Date {
    //     return this.props.createdAt;
    // }
    // get updatedAt(): Date {
    //     return this.props.updatedAt;
    // }
    set isActive(value) {
        this.props.isActive = value;
    }
    // private set updatedAt(date: Date) {
    //     this.props.updatedAt = date;
    // }
    // private set createdAt(date:Date) {
    //     this.props.createdAt = date;
    // }
    set description(value) {
        this.props.description = value;
    }
}
exports.Category = Category;
