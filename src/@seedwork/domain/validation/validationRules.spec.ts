import ValidationRules from "./validationRules"

describe('Validation Rules test' , () => {
    it('should throw an error when required string is not a string', () => {
        expect(() => ValidationRules.values(983.33, 'myProperty').string()).toThrowError();
    })

    it('should throw an error when required is empty', () => {
        expect(() => ValidationRules.values(null ,'prop').required()).toThrowError()

        expect(() => ValidationRules.values('' ,'prop').required()).toThrowError()

        expect(() => ValidationRules.values(false ,'prop').required()).toThrowError()
        expect(() => ValidationRules.values('grub', 'jonh').required()).not.toThrow();
    });


    it('should throw an erro when lenght is grether than maxLenght', () => {
        expect(() => ValidationRules.values('123456789', 'propsNumber').maxLength(3)).toThrow()
        expect(() => ValidationRules.values('123456789', 'props').maxLength(11)).not.toThrow()
    })

    it('should be valid', () => {
        expect(() => ValidationRules.values('john doe', 'name').required().maxLength(15).string())
    })
    
})