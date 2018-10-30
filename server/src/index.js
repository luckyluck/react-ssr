import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Telling server to use folder as a static directory
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});