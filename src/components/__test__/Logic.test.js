import operate from '../../logic/operate';
import calculate from '../../logic/calculate';

describe('Test the calculate.js file', () => {
  const numberOne = 10;
  const numberTwo = 5;
  it('Can perfor the Addition correctly', () => {
    const operation = '+';

    const totalValue = operate(numberOne, numberTwo, operation);

    expect(totalValue).toBe('15');
  });

  it('Can perfor the Subtruction correctly', () => {
    const operation = '-';

    const totalValue = operate(numberOne, numberTwo, operation);

    expect(totalValue).toBe('5');
  });

  it('Can perfor the Multiplication correctly', () => {
    const operation = 'x';

    const totalValue = operate(numberOne, numberTwo, operation);

    expect(totalValue).toBe('50');
  });

  it('Can perfor the Division correctly', () => {
    const operation = '÷';

    const totalValue = operate(numberOne, numberTwo, operation);

    expect(totalValue).toBe('2');
  });

  it('Can perfor the Modulo correctly', () => {
    const operation = '%';

    const totalValue = operate(numberOne, numberTwo, operation);

    expect(totalValue).toBe('0');
  });

  it('Throw an error message when supplied with divide by zero.', () => {
    const numberOne = 10;
    const numberTwo = 0;
    const operation = '%';

    const totalValue = operate(numberOne, numberTwo, operation);

    expect(totalValue).toBe("Can't find modulo as can't divide by 0.");
  });
});

describe('Test the operate.js file', () => {
  it('should return an object with null values', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = 'AC';

    const calcObject = calculate(obj, buttonName);

    expect(calcObject).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return an object with null values', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = 'AC';

    const calcObject = calculate(obj, buttonName);

    expect(calcObject).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return an empty object', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const buttonName = '0';

    const calcObject = calculate(obj, buttonName);

    expect(calcObject).toEqual({});
  });

  it('If there is an operation, update next', () => {
    const obj = {
      total: null,
      next: '5',
      operation: '-',
    };
    const buttonName = '8';

    const calcObject = calculate(obj, buttonName);

    expect(calcObject).toEqual({ next: '58', operation: '-', total: null });
  });

  it('If there is no operation, update next and clear the value', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const buttonName = '8';

    const calcObject = calculate(obj, buttonName);

    expect(calcObject).toEqual({ next: '58', total: null });
  });
});
