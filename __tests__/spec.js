const pug = require('pug');
const application = require('../src/main');

describe("Calculator", () => {
    const app = application();
    it("sum two numbers", () => {
        expect(app.sum(12, 2)).toEqual(14);
    });
    it("subtract two numbers", () => {
        expect(app.subtract(2, 2)).toEqual(0);
    });
    it("multiply two numbers", () => {
        expect(app.multiply(2, 2)).toEqual(4);
    });
    it("divide two numbers", () => {
        expect(app.divide(2, 2)).toEqual(1);
    });
});

describe ("get buttons value", () => {
    beforeEach(function () {
        document.body.innerHTML = pug.compileFile('./views/main.pug', null)();  
    });
    it('loads the markup', function () {
        expect(
            document.querySelectorAll(".number"))
            .not.toBeNull();
    });
    it("get numbers", () => {
        const buttonNumber = document.querySelectorAll(".number");
        expect(Number(buttonNumber[0].value)).toBe(1);
    });
    it("get numbers", () => {
        const buttonOperator = document.querySelectorAll(".operator");
        expect(buttonOperator[0].value).toBe('.');
    });
    
});