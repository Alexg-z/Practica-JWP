const express = require('express');
const app = express();

// Rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({
        tuits: [
            {
                id: 1,
                usaername: 'Juan',
                text: 'Hola mundo'
            },
            {
                id: 2,
                username: 'Pedro',
                text: 'Hola mundo'
            },
            {
                id: 3,
                username: 'Maria',
                text: 'Hola mundo'
            }
        ]
    });
});

app.get('/login', (req, res) => {
    res.send(
        `<html>
        <head>
            <title>Login</title>
        </head>
        <body>
            <form action="/auth" method="POST">
                Nombre de usuario: <input type="text" name="username" placeholder="Username"><br>
                Password: <input type="password" name="password" placeholder="Password"><br>
                <button type="submit">Login</button>
            </form>
        </body>
        </html>`
    );
});

// Inicializar el servidor
app.listen(3000, () => {
    console.log('app listening on port 3000!');
});

