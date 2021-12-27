const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects.toEqual(
      new Error('Infelizmente não podemos atender...'),
    );
  });
});
