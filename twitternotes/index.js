const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('text');
});

app.listen(8080, () => {
    console.log('Express server is running on port 8080');
});
