const { add, substract, multiply, divide } = require('./calculator');

describe('Calc add', () => {
    test('5+5=10', () => {
        expect(add(5, 5)).toBe(10);
    })
    test('85+85=170', () => {
        expect(add(85, 85)).toBe(170);
    })
    test('2570+8219=10789', () => {
        expect(add(2570, 8219)).toBe(10789);
    })
});

describe('Calc substract', () => {
    test('85-5=80', () => {
        expect(substract(85, 5)).toBe(80);
    })
    test('5-85=-80', () => {
        expect(substract(5, 85)).toBe(-80);
    })
    test('85-0=85', () => {
        expect(substract(85, 0)).toBe(85);
    })
});

describe('Calc multiply', () => {
    test('85*10=850', () => {
        expect(multiply(85, 10)).toBe(850);
    })
    test('85*-10=-850', () => {
        expect(multiply(85, -10)).toBe(-850);
    })
    test('85*0=0', () => {
        expect(multiply(85, 0)).toBe(0);
    })
    
});

describe('Calc divide', () => {
    test('10/2=5', () => {
        expect(divide(10, 2)).toBe(5);
    })
    test('1092/55=19.854545454545455', () => {
        expect(divide(1092, 55)).toBe(19.854545454545455);
    })
    test('0/20=0', () => {
        expect(divide(0, 20)).toBe(0);
    })
    
});







