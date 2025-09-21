const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Permet d'accéder aux fichiers dans /assets depuis le navigateur
app.use("/backend-assets", express.static("assets"));


app.use("/users",require("./router/post.route"));
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})