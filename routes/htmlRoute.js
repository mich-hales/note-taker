const path = require('path');

// HTML Routes for notes.html and index.html
const htmlRoute = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/notes.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/index.html'));
    });
}

module.exports = htmlRoute;