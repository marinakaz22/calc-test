import calculator from '../src/calculator';

describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
  /* test('3+4=7', () => {
    expect(calculator(3, '+', 4)).toBe(7);
  });
  test('3-4=-1', () => {
    expect(calculator(3, '-', 4)).toBe(-1);
  });
  test('5/0=Infinity', () => {
    expect(calculator(5, '/', 0)).toBe(Infinity);
  });
  test('8*8=64', () => {
    expect(calculator(8, '*', 8)).toBe(64);
  });
  test('no operandA it is fails', () => {
    expect(() => calculator('~', '+', 7)).toThrow();
  });
  test('no operation it is fails', () => {
    expect(() => calculator(7, '~', 7)).toThrow();
  });
  test('no operandB it is fails', () => {
    expect(() => calculator(7, '*', '~')).toThrow();
  });*/
});

describe('Calculator parameteric test', () => {
  test.each`
    a      | op     | b      | expected
    ${4}   | ${'+'} | ${5}   | ${9}
    ${3}   | ${'-'} | ${3}   | ${0}
    ${7}   | ${'*'} | ${7}   | ${49}
    ${6}   | ${'/'} | ${3}   | ${2}
    ${'?'} | ${'+'} | ${2}   | ${'error'}
    ${5}   | ${'?'} | ${7}   | ${'error'}
    ${7}   | ${'/'} | ${'?'} | ${'error'}
 `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});
