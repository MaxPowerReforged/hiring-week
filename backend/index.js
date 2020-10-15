'use strict'
const app = require("./controller/app.js")

const port = 8887;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;