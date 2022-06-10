import InvalidIdError from "./invalid-id-error";

describe('Test invalid id error unit' , () => {
    it('should create an instance', () => {
        const error = new InvalidIdError();
        expect(error).toBeTruthy();
    })
});