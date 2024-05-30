const createSlug = require('./createSlug.js');
const posts = require('../../db/posts.js');


test('dovrebbe ritornare una stringa', () => {
    const result = createSlug('Titolo di Test', posts);
    expect(typeof result).toBe('string');
})

test('dovrebbe ritornare una stringa in lowercase', () => {
    const result = createSlug('Titolo di Test', posts);
    expect(result).toBe('titolo-di-test');
})

test('dovrebbe ritornare una stringa con gli spazi sostituiti da `-`', () => {
    const result = createSlug('Titolo di Test', posts);
    expect(result).toBe('titolo-di-test');
})

test('dovrebbe incrementare di 1 lo slug quando esiste già.', () => {
    const result = createSlug('Cracker alla barbabietola', posts);
    expect(result).toBe('cracker-alla-barbabietola-1');
})

test('dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug('', [])).toThrow();
    expect(() => createSlug(123, [])).toThrow();
})

test('dovrebbe lanciare un errore se manca l\'array dei post.', () => {
    expect(() => createSlug('Titolo di Test')).toThrow();
})

