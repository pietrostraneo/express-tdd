const fs = require('fs');

class Model {
    constructor(filename) {
        if (!filename) {
            throw new Error('file name is required');
        }
        this.filename = filename;
    }

    read() {
        const data = fs.readFileSync(this.filename, 'utf8');
        return JSON.parse(data);
    }

    add(item) {
        const data = this.read();
        data.push(item);
        fs.writeFileSync(this.filename, JSON.stringify(data, null, 2));
        return data;
    }
}

module.exports = Model;
