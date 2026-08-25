const express = require('express');
const app = express();
const port = 3000;
const host = '127.0.0.1';


app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.post('/', (req, res) => {
    res.send('Привет, мир!');
});

app.delete('/', (req, res) => {
    res.send('Привет, мир!', {});
});


app.get('/test/', (req, res) => {
    res.send('Uh ti!');
});

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);

    res.send('ur id ' + req.params.id);
});

app.get((req, res) => {
    res.status(404)
        .send('Страница не найдена');
});

app.listen(port, host, (error) => {
    if (error) {
        console.error('Не удалось запустить сервер:', error.message);
        process.exit(1);
    }

    console.log(`Сервер запущен: http://${host}:${port}`);
});
