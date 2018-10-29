import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// Telling server to use folder as a static directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    // Creating a HTML snippet to add js bundle to the sending page
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});