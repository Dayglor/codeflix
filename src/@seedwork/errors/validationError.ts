export default class ValidationError extends Error {
    constructor(message?:string ) {
        super(message || 'Id invalid - 123');
        this.name = 'ValidationError';
    }
}