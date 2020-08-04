const express = require("express");
const app = express();
const port = 3002;

app.use(express.static('public'));
app.use(express.static('./views'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
