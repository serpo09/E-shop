const express = require('express');
const router = require('./router/auth');
const app = express();
app.use(router);
const port = 7000;

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})
