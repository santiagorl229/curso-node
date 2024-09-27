import { getAge } from "../../src/plugins";

describe("plugin/get-age.plugin.ts", () => {

    test("getAge should return the age of a person", () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');

    });
    test("getAge should return current age", () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);
        const calculated =  new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculated);
    });

    test("getAge should return 0 years", () =>{

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        expect(spy).toHaveBeenCalledWith();
    });




});