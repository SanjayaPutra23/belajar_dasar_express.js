const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got request');
//     res.send('Ini string dari respon');
// });

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/cats', (req, res) => {
    res.send('This is cats page');
});

app.post('/cats', (req, res) => {
    res.send('Thisis cats page from post');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params;
    res.send(`Kita sedang melihat postingan dengan judul ${judul}`);
});

app.get("/blog/:category/:judul/:author", (req, res) => {
    const { category, judul, author } = req.params;
    res.send(`Blog dengan kategori :${category} | Author: ${author} | ${judul}`);
});

app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send('<h1>Tidak ada data yang dicari</h1>');
    }
    res.send(`<h1>Search keyword: ${q}</h1>`)
});

app.get('*', (req, res) => {
    res.send('Halaman tidak ditemukan');
});

app.listen(8080, () => {
    console.log('Server os running on http://localhost:8080');
});
