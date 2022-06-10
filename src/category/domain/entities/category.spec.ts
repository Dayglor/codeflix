

import InvalidIdError from "../../../@seedwork/errors/invalid-id-error";
import Md5 from "../../../@seedwork/domain/identificationGenerator/implementations/md5";
import Uuid from "../../../@seedwork/domain/identificationGenerator/implementations/uuid";
import { Category } from "./Category";

describe('Category', () => {
  it('should be defined', () => {
    expect(new Category({}, new Md5())).toBeDefined();
  });

  it('should have a name and category', () => {
    const category = new Category({
      name: 'category name'
    }, new Uuid());
    expect(category.name).toBe('category name');

    const category2 = new Category({
      name: 'name of a category',
      description: 'category description'
    }, new Uuid());

    expect(category2.name).toBe('name of a category');
    expect(category2.description).toBe('category description');
  })

  it('should have a createdAt and is active true', () => {
    const category = new Category({
      name: 'category name',
      isActive: true
    }, new Uuid());

    expect(category.createdAt).toBeDefined();
    expect(category.isActive).toBe(true);
  })

  it('should have a createdAt pre defined and active is false', () => {

    const now = new Date();
    const category = new Category({
      name: 'category name',
      isActive: false,
      createdAt: now
    }, new Uuid());

    expect(category.createdAt).toBeDefined();
    expect(category.createdAt).toBe(now);
    expect(category.isActive).toBe(false);
  })

  it('should have a updatedAt pre defined and active is false', () => {
      
      const now = new Date();
      const category = new Category({
        name: 'category name',
        isActive: false,
        createdAt: now,
        updatedAt: now
      }, new Uuid());
  
      expect(category.updatedAt).toBeDefined();
      expect(category.updatedAt).toBe(now);
      expect(category.createdAt).toBe(now);
      expect(category.isActive).toBe(false);
  })

  it('should have an id', () => {
    const category = new Category({
      name: 'category name',
    }, new Md5());

    expect(category.id).toBeDefined();
  });

  it('should throw an error when id is empty', () => {

    expect(() => {
      const category = new Category({
          name: 'category name of underless'
        }, {
          generateId: () => ''
        })
      }).toThrow(new InvalidIdError('empty id'));
  })

  it('the function validate once should be called', () => {
    const validateSpy = jest.spyOn(Category.prototype as any, 'validate')      
    const category = new Category({
      name: 'category name',
    }, new Md5());
    expect(validateSpy).toBeCalledTimes(1)
  })

  it('should be set removedAt ', () => {
    const category = new Category({
      name: 'category name',
      isActive: true
    }, new Uuid());

    const removedAt = new Date();
    category.removedAt = removedAt;

    expect(category.removedAt).toBe(removedAt);

    const category2 = new Category({
      name: 'category name',
      isActive: true
    }, new Uuid());

    expect(category2.removedAt).toBeNull();
  })

  it("should be convert to json", () => {
    const category = new Category({
      name: 'category name',
      isActive: true
    }, new Uuid());

    const CategoryPropsOutput = category.toJSON();

    expect(CategoryPropsOutput).toBeDefined();
    expect(CategoryPropsOutput.id).toBe(category.id);
    expect(CategoryPropsOutput.name).toBe(category.name);
    expect(CategoryPropsOutput.description).toBe(category.description);
    expect(CategoryPropsOutput.isActive).toBe(category.isActive);
    expect(CategoryPropsOutput.createdAt).toBe(category.createdAt);
    expect(CategoryPropsOutput.updatedAt).toBe(category.updatedAt);
    expect(CategoryPropsOutput.removedAt).toBe(category.removedAt);
  })

  it('should be change name and conver to json with new name', () => {
    const category = new Category({
      name: 'category name',
      isActive: true
    }, new Uuid());

    category.name = 'new name';

    expect(category.name).toBe('new name');

    const jsonData = category.toJSON();
    expect(jsonData.name).toBe('new name');

  })
})