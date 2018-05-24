const pug = require('pug');
const application = require('../src/main');

describe("Calculator", () => {
    const app = application();
    it("sum two numbers", () => {
        expect(app.sum(2, 2)).toEqual(4);
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