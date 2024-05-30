const slugify = require('slugify');
const posts = require('../../db/posts.js');

module.exports = (title, arrayOfPosts) => {

    // 4. `createSlug` dovrebbe incrementare di 1 lo slug quando esiste già.

    // Creo lo slug
    let slug = slugify(title).toLowerCase();

    // Dichiario variabile uniqueSlug
    let uniqueSlug = slug;
    let count = 1

    // Estraggo il primo post che abbia lo slug uguale a quello unico
    while (posts.some(post => post.slug === uniqueSlug)) {

        // Genero uno slug nuovo
        uniqueSlug = `${slug}-${count++}`;
    }


    // 5. `createSlug` dovrebbe lanciare un errore in caso di titolo non presente o formato errato.
    if (typeof title !== 'string' || title.trim() === '') {
        throw new Error('Title is required and must be of type string');
    }


    // 6. `createSlug` dovrebbe lanciare un errore se manca l'array dei post.
    if (!arrayOfPosts) {
        throw new Error('Array of posts is required');
    }

    return uniqueSlug;
}