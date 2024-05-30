const Model = require('./Model');
const fs = require('fs');

test('dovrebbe essere una classe', () => {
    const newModel = new Model('data.json');
    expect(newModel).toBeInstanceOf(Model);
});

test('dovrebbe richiedere il nome del file json in fase di creazione', () => {
    expect(() => new Model()).toThrow();
    expect(() => new Model('data.json')).not.toThrow();
});

test('dovrebbe avere il metodo read', () => {
    const newModel = new Model('data.json');
    expect(typeof newModel.read).toBe('function');
});

test('dovrebbe avere il metodo add', () => {
    const newModel = new Model('data.json');
    expect(typeof newModel.add).toBe('function');
});