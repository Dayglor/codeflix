export default class InvalidIdError extends Error {
    constructor(message?:string ) {
        super(message || 'Id invalid - 123');
        this.name = 'InvalidUniqueIdentifier';
    }
}