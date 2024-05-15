const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("*", (req, res) => {
    res.status(404).send('File not found');
});

app.listen(3000, () => {
    console.log(`server starts at port no ${PORT}`);
});