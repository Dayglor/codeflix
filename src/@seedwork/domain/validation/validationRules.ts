import ValidationError from "../../../@seedwork/errors/validationError";

export default class ValidationRules {
    private constructor ( private readonly value:any, private readonly prop:string) {

    }

    static values (value: any, property: string) {
        return new ValidationRules(value, property);
    }

    required(): this{
        if(!this.value) {
            throw new ValidationError(`the ${this.prop} is required`)
        }
        return this;
    }

    string(): this {
        if (typeof this.value !== 'string') {
            throw new ValidationError(`the property ${this.prop} must be string`)
        }

        return this;
    }

    maxLength(max: number): this {
        if (this.value.length > max) {
            throw new ValidationError(`the property ${this.prop} must be less or equal than ${max} characteres`)
        }
        return this;
    }


}