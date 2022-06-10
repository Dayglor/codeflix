"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invalid_id_error_1 = __importDefault(require("../../../@seedwork/errors/invalid-id-error"));
const md5_1 = __importDefault(require("../../../@seedwork/domain/identificationGenerator/implementations/md5"));
const uuid_1 = __importDefault(require("../../../@seedwork/domain/identificationGenerator/implementations/uuid"));
const Category_1 = require("./Category");
describe('Category', () => {
    it('should be defined', () => {
        expect(new Category_1.Category({}, new md5_1.default())).toBeDefined();
    });
    it('should have a name and category', () => {
        const category = new Category_1.Category({
            name: 'category name'
        }, new uuid_1.default());
        expect(category.name).toBe('category name');
        const category2 = new Category_1.Category({
            name: 'name of a category',
            description: 'category description'
        }, new uuid_1.default());
        expect(category2.name).toBe('name of a category');
        expect(category2.description).toBe('category description');
    });
    it('should have a createdAt and is active true', () => {
        const category = new Category_1.Category({
            name: 'category name',
            isActive: true
        }, new uuid_1.default());
        expect(category.createdAt).toBeDefined();
        expect(category.isActive).toBe(true);
    });
    it('should have a createdAt pre defined and active is false', () => {
        const now = new Date();
        const category = new Category_1.Category({
            name: 'category name',
            isActive: false,
            createdAt: now
        }, new uuid_1.default());
        expect(category.createdAt).toBeDefined();
        expect(category.createdAt).toBe(now);
        expect(category.isActive).toBe(false);
    });
    it('should have a updatedAt pre defined and active is false', () => {
        const now = new Date();
        const category = new Category_1.Category({
            name: 'category name',
            isActive: false,
            createdAt: now,
            updatedAt: now
        }, new uuid_1.default());
        expect(category.updatedAt).toBeDefined();
        expect(category.updatedAt).toBe(now);
        expect(category.createdAt).toBe(now);
        expect(category.isActive).toBe(false);
    });
    it('should have an id', () => {
        const category = new Category_1.Category({
            name: 'category name',
        }, new md5_1.default());
        expect(category.id).toBeDefined();
    });
    it('should throw an error when id is empty', () => {
        expect(() => {
            const category = new Category_1.Category({
                name: 'category name of underless'
            }, {
                generateId: () => ''
            });
        }).toThrow(new invalid_id_error_1.default('empty id'));
    });
    it('the function validate once should be called', () => {
        const validateSpy = jest.spyOn(Category_1.Category.prototype, 'validate');
        const category = new Category_1.Category({
            name: 'category name',
        }, new md5_1.default());
        expect(validateSpy).toBeCalledTimes(1);
    });
    it('should be set removedAt ', () => {
        const category = new Category_1.Category({
            name: 'category name',
            isActive: true
        }, new uuid_1.default());
        const removedAt = new Date();
        category.removedAt = removedAt;
        expect(category.removedAt).toBe(removedAt);
        const category2 = new Category_1.Category({
            name: 'category name',
            isActive: true
        }, new uuid_1.default());
        expect(category2.removedAt).toBeNull();
    });
    it("should be convert to json", () => {
        const category = new Category_1.Category({
            name: 'category name',
            isActive: true
        }, new uuid_1.default());
        const CategoryPropsOutput = category.toJSON();
        expect(CategoryPropsOutput).toBeDefined();
        expect(CategoryPropsOutput.id).toBe(category.id);
        expect(CategoryPropsOutput.name).toBe(category.name);
        expect(CategoryPropsOutput.description).toBe(category.description);
        expect(CategoryPropsOutput.isActive).toBe(category.isActive);
        expect(CategoryPropsOutput.createdAt).toBe(category.createdAt);
        expect(CategoryPropsOutput.updatedAt).toBe(category.updatedAt);
        expect(CategoryPropsOutput.removedAt).toBe(category.removedAt);
    });
    it('should be change name and conver to json with new name', () => {
        const category = new Category_1.Category({
            name: 'category name',
            isActive: true
        }, new uuid_1.default());
        category.name = 'new name';
        expect(category.name).toBe('new name');
        const jsonData = category.toJSON();
        expect(jsonData.name).toBe('new name');
    });
});
